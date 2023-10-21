import ContactItem from 'components/ContactItem/ContactItem';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { getContactsFromBack } from 'redux/operations';
import { SimpleGrid } from '@chakra-ui/react';

function ContactList() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(getContactsFromBack());
  }, [dispatch]);

  const getFilteredContact = () => {
    return contactsList.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <SimpleGrid as="ul" columns={1} spacing={6} mt="5">
      {getFilteredContact().map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </SimpleGrid>
  );
}

export default ContactList;
