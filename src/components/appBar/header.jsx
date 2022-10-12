import { Navigation } from '../navigation/navigation';
import { UserMenu } from '../userMenu/menu';
import { AuthNav } from '../authNav/authNav';
import { useAuth } from 'hooks';
import css from './header.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
