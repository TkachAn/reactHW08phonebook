import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/registration/form';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
