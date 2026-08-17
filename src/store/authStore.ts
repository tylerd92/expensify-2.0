import { create } from "zustand";
import type { User } from "firebase/auth";
import { loginWithGoogle, logout as firebaseLogout } from "../firebase/auth";

type AuthState = {
  user: User | null;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  login: async () => {
    await loginWithGoogle();
  },
  logout: async () => {
    await firebaseLogout();
    set({ user: null });
  },
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
}));
