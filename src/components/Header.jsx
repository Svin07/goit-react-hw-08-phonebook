import { Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import defaultLogo from '../images/contacts.png';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box, Container, Flex, useColorMode } from '@chakra-ui/react';

export default function Header() {
  const logo = defaultLogo;
  const { colorMode } = useColorMode();

  return (
    <Box py="2" bg={colorMode === 'dark' ? 'brand.700' : 'brand.100'}>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Link to="/">
            <img src={logo} alt="Logo" width="32" />
          </Link>
          <ColorModeSwitcher ml="20" />
          <Navigation />
        </Flex>
      </Container>
    </Box>
  );
}
