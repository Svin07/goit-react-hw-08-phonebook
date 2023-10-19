import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import { getIsLoggedIn } from 'redux/selectors';
import { Container } from '@chakra-ui/react';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <Container maxW="container.lg">{!isLoggedIn && <LogIn />}</Container>;
};

export default Home;
