import { Helmet } from 'react-helmet';
// import { RegisterForm } from '../components/forms/register';
import SignUp from 'components/forms/singUp';
export default function Register() {
  return (
    <main>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <SignUp />
    </main>
  );
}
