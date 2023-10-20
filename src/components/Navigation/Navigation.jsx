import { Flex, Spacer } from '@chakra-ui/react';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: gray.900;

  &.active {
    color: orange;
  }
`;

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <StyledLink to="/">Home</StyledLink>
      <Spacer />
      <StyledLink to="Contacts">Contacts</StyledLink>
      <Spacer w="40" />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
}
