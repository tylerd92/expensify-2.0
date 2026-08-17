import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const login = useAuthStore((state) => state.login);

  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <button className='button' onClick={login}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
