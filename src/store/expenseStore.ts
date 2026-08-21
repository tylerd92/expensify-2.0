import { create } from "zustand";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import type { Expense, ExpenseInput } from "../types/Expense";

type ExpenseState = {
  expenses: Expense[];
  isLoading: boolean;
  subscribe: (uid: string) => Unsubscribe;
  addExpense: (uid: string, expense: ExpenseInput) => Promise<void>;
  editExpense: (
    uid: string,
    id: string,
    updates: ExpenseInput,
  ) => Promise<void>;
  removeExpense: (uid: string, id: string) => Promise<void>;
};

export const useExpenseStore = create<ExpenseState>((set) => ({
  expenses: [],
  isLoading: true,
  subscribe: (uid: string) => {
    const expensesRef = collection(db, "users", uid, "expenses");
    const q = query(expensesRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const expenses: Expense[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Expense, "id">),
      }));
      set({ expenses, isLoading: false });
    });

    return unsubscribe;
  },
  addExpense: async (uid: string, expense: ExpenseInput) => {
    const expensesRef = collection(db, "users", uid, "expenses");
    await addDoc(expensesRef, expense);
  },
  editExpense: async (uid: string, id: string, updates: ExpenseInput) => {
    const expenseRef = doc(db, "users", uid, "expenses", id);
    await updateDoc(expenseRef, { ...updates });
  },
  removeExpense: async (uid: string, id: string) => {
    const expenseRef = doc(db, "users", uid, "expenses", id);
    await deleteDoc(expenseRef);
  },
}));
