import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Header = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <Link to='/' className='header__title'>
            <h1>Expensify</h1>
          </Link>
          <button className='button button--link' onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
