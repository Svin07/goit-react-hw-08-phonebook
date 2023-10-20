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
import Message from 'components/Message/Message';
import Loader from 'pages/Contacts/Loader/Loader';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/operations';
import { getIsErrorAuth, getIsLoading } from 'redux/selectors';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(getIsErrorAuth);
  const isLoading = useSelector(getIsLoading);

  const handlyChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      {error && <Message text={error} />}
      {isLoading && <Loader />}
      <Container maxW="container.lg">
        <Center p="5" h="70px">
          <Heading size="xl">Please register</Heading>
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
                <Text color="teal">Name</Text>
                <Input
                  color="gray.800"
                  focusBorderColor="#38A169"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handlyChange}
                />
              </label>
              <label>
                <Text mt="4" color="teal">
                  E-mail
                </Text>
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
                Register
              </Button>
              <Heading size="s" color="gray.300">
                If you are already registered, please &nbsp;
                {
                  <Button mt="4" colorScheme="teal" variant="link">
                    <Link to="/">Login</Link>
                  </Button>
                }
              </Heading>
            </form>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
