import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/operations';

export default function LogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlyChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handlySubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Container maxW="container.lg">
      <Center p="5" h="70px">
        <Heading size="xl">Please enter your email and password</Heading>
      </Center>

      <Box
        maxW="sm"
        mt="4"
        mr="auto"
        ml="auto"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        color="white"
      >
        <Stack spacing={3}>
          <form onSubmit={handlySubmit} autoComplete="off">
            <label>
              <Text color="teal">E-mail</Text>
              <Input
                color="gray.800"
                focusBorderColor="#38A169"
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={handlyChange}
              />
            </label>
            <label>
              <Text mt="4" color="teal">
                Password
              </Text>
              <Input
                color="gray.800"
                focusBorderColor="#38A169"
                placeholder="Password"
                type="text"
                name="password"
                value={password}
                onChange={handlyChange}
              />
            </label>
            <Button mt="4" type="submit" colorScheme="teal" variant="outline">
              Login
            </Button>
            <Heading mt="4" size="s" color="gray.300">
              If you do not have an account, please &nbsp;
              {
                <Button colorScheme="teal" variant="link">
                  <Link to="/register">Registration</Link>
                </Button>
              }
            </Heading>
          </form>
        </Stack>
      </Box>
    </Container>
  );
}
