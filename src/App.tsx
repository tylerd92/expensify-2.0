import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useAuthStore } from "./store/authStore";
import LoginPage from "./pages/LoginPage";
import LoadingPage from "./pages/LoadingPage";
import Header from "./components/Header";
import ExpenseDashboard from "./pages/ExpenseDashboard";

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
      <ExpenseDashboard />
    </>
  );
}

export default App;
