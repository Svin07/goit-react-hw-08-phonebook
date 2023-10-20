import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import {
  getIsErrorAuth,
  getIsLoading,
  getIsLoggedIn,
  getUserName,
} from 'redux/selectors';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Message from 'components/Message/Message';
import Loader from 'pages/Contacts/Loader/Loader';

const Home = () => {
  const name = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const error = useSelector(getIsErrorAuth);
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      {error && <Message text={error} />}
      {isLoading && <Loader />}
      <Container maxW="container.lg">
        {!isLoggedIn ? (
          <LogIn />
        ) : (
          <Box
            h="400px"
            // bgImage="url('/src/images/old-telephone.png')"
            style={{
              backgroundImage:
                'url(/src/images/old-telephone.png),linear-gradient(106.61deg, #F8E1EC 0%, #68D391 100%)',
            }}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Center p="5" h="100px">
              <Heading size="xl">This is the home page of the site</Heading>
            </Center>
            <Center p="5" h="70px">
              <Text fontSize="3xl">Welcome, {name}!</Text>
            </Center>
            <Divider />
            <Center p="5" h="100px">
              <Heading size="xl">
                Please click{' '}
                {
                  <Button size="xl" mt="4" colorScheme="teal" variant="link">
                    <Link to="/contacts">Contacts</Link>
                  </Button>
                }{' '}
                to continue
              </Heading>
            </Center>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Home;
