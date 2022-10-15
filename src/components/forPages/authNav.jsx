import { NavLink } from 'react-router-dom';
import css from './css.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>

      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
// className={css.link}
//className={css.link}
