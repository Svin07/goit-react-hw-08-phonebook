import { Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export default function Header() {
  const logo = '../../public/contacts.png';

  return (
    <header className="">
      <Link to="/">
        <h2>{logo}</h2>
      </Link>
      <Navigation />
    </header>
  );
}
