import { Link } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div className="">
      <Link to="/register">Registration</Link>
      <Link to="/">Log in</Link>
    </div>
  );
}
