import { Flex, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function AuthNav() {
  return (
    <Flex justifyContent="end" alignItems="center">
      <Link to="/register">Registration</Link>
      <Spacer w="20" />
      <Link to="/">Log in</Link>
    </Flex>
  );
}
