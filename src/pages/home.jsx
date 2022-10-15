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
      <h3>Home</h3>

      <span role="img" aria-label="Greeting icon">
        💁‍♀️
      </span>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <b>Contacts home page</b>
    </main>
  );
}
// style={styles.container}
