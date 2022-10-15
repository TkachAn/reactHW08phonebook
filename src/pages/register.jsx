import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/forms/register';

export default function Register() {
  return (
    <main>
      <h3>Registration</h3>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </main>
  );
}
