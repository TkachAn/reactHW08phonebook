import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/forms/login';

export default function Login() {
  return (
    <main>
      <h3>Login</h3>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </main>
  );
}
