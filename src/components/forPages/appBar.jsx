import Navigation from '../forPages/navigation';
import { UserMenu } from '../forPages/userMenu';
import { AuthNav } from '../forPages/authNav';
import { useAuth } from '../../hooks/useAuth';
// import { AppBar } from '@mui/material';

import css from './css.module.css';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
// className={css.header}
//<UserMenu /> : <AuthNav />
