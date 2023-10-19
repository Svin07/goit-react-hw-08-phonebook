import { Flex, Spacer } from '@chakra-ui/react';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Link to="/">Home</Link>
      <Spacer />
      <Link to="Contacts">Contacts</Link>
      <Spacer w="40" />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
}
