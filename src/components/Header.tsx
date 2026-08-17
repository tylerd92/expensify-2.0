import { useAuthStore } from "../store/authStore";

const Header = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <h1>Expensify</h1>
          <button className='button button--link' onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
