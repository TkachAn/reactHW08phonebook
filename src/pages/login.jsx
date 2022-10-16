import { Helmet } from 'react-helmet';
// import { LoginForm } from '../components/forms/login';
import SignIn from 'components/forms/singIn';
export default function Login() {
  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <SignIn />
    </main>
  );
}
