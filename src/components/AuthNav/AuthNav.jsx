import { Flex, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: gray.900;

  &.active {
    color: orange;
  }
`;

export default function AuthNav() {
  return (
    <Flex justifyContent="end" alignItems="center">
      <StyledLink to="/register">Registration</StyledLink>
      <Spacer w="20" />
    </Flex>
  );
}
