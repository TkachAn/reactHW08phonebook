import { Helmet } from 'react-helmet';
// import { LoginForm } from '../components/forms/login';
import SignIn from 'components/forms/singIn';
export default function Login() {
  return (
    <main>
      {/* <h3>Login</h3> */}
      <Helmet>
        <title>Login</title>
      </Helmet>
      {/* <LoginForm /> */}
      <SignIn />
    </main>
  );
}
