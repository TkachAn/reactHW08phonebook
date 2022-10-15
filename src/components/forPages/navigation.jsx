import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './css.module.css';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/" end>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
//className={css.link}
