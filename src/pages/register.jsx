import { Helmet } from 'react-helmet';
// import { RegisterForm } from '../components/forms/register';
import SignUp from 'components/forms/singUp';
export default function Register() {
  return (
    <main>
      {/* <h3>Registration</h3> */}
      <Helmet>
        <title>Registration</title>
      </Helmet>
      {/* <RegisterForm /> */}
      <SignUp />
    </main>
  );
}
