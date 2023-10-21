import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addNewContact } from 'redux/operations';
import Message from 'components/Message/Message';
import { Box, Button, Input, useColorMode } from '@chakra-ui/react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isExist, setIsExist] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const { colorMode } = useColorMode();
  const defaultValue = '';

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
    setIsExist(false);
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      setIsExist(true);

      return;
    } else {
      dispatch(addNewContact({ name, number }));
    }

    setName(defaultValue);
    setNumber(defaultValue);
  };

  return (
    <>
      {isExist && <Message text={`${name}is already in contacts`} />}
      <Box>
        <form onSubmit={handleSubmit}>
          <label htmlFor="exampleInputName"></label>
          <Input
            display="block"
            mt="5"
            type="text"
            id="exampleInputName"
            name="name"
            onChange={handleChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            maxW="300px"
            placeholder="Name"
            _placeholder={{ opacity: 1, color: 'gray.500' }}
            size="md"
            bg={colorMode === 'dark' ? 'brand.900' : 'white'}
          />

          <label htmlFor="exampleInputNumder"></label>
          <Input
            display="block"
            mt="5"
            type="tel"
            id="exampleInputNumder"
            name="number"
            onChange={handleChangeNumber}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            maxW="300px"
            placeholder="Phone"
            _placeholder={{ opacity: 1, color: 'gray.500' }}
            size="md"
            bg={colorMode === 'dark' ? 'brand.900' : 'white'}
          />

          <Button
            display="block"
            type="submit"
            maxW="300px"
            mt="5"
            colorScheme={colorMode === 'dark' ? 'whatsapp' : 'blackAlpha'}
          >
            Add New Contact
          </Button>
        </form>
      </Box>
    </>
  );
}
