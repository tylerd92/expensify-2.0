import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useAuthStore } from "./store/authStore";
import LoginPage from "./pages/LoginPage";
import LoadingPage from "./pages/LoadingPage";
import Header from "./components/Header";
import ExpenseDashboard from "./pages/ExpenseDashboard";
import AddExpense from "./pages/AddExpense";
import EditExpensePage from "./pages/EditExpensePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const { user, isLoading, setUser, setLoading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [setUser, setLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    return <LoginPage />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ExpenseDashboard />} />
        <Route path="/create" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpensePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
