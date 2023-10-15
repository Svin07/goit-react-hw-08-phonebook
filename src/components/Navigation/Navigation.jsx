import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className="">
      <Link to="/">Home</Link>
      <Link to="Contacts">Contacts</Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
