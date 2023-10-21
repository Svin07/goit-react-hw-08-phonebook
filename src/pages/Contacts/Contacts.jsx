import ContactList from '../../components/ContsctList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getIsErrorContacts, getIsLoading } from 'redux/selectors';
import { Box, Heading, useColorMode } from '@chakra-ui/react';
import Message from 'components/Message/Message';

export function Contacts() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getIsErrorContacts);
  const { colorMode } = useColorMode();

  return (
    <Box
      h="100%"
      m="2"
      p="8"
      borderRadius="md"
      bg={colorMode === 'dark' ? 'brand.200' : 'brand.300'}
    >
      {isLoading && <Loader />}
      {error && <Message text={error} />}
      <Heading size="xl">Phonebook</Heading>

      <ContactForm />
      <Heading mt="8" size="xl">
        Contacts
      </Heading>

      <Filter />
      <ContactList />
    </Box>
  );
}
