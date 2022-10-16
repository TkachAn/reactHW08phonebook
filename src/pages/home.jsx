// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//     color: 'black',
//   },
// };
import { Helmet } from 'react-helmet';
export default function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <h3>Home</h3>

      <span role="img" aria-label="Greeting icon">
        💁‍♀️
      </span>

      <b>Contacts home page</b>
    </main>
  );
}
// style={styles.container}
