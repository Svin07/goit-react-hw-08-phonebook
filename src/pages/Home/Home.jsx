import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import { getIsLoggedIn } from 'redux/selectors';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return !isLoggedIn && <LogIn />;
};

export default Home;
