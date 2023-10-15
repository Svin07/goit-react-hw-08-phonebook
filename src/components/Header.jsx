import { Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import defaultLogo from './contacts.png';

export default function Header() {
  const logo = defaultLogo;

  return (
    <header className="">
      <Link to="/">
        <img src={logo} alt="Logo" width="32" />
      </Link>
      <Navigation />
    </header>
  );
}
