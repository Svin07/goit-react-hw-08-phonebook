import { useDispatch } from 'react-redux';

import { addFilter } from 'redux/Contacts/filtersSlice';
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export default function Filter() {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(addFilter(value));
  };

  return (
    <div>
      <h6>Find contacts by name</h6>
      <label htmlFor="exampleInputFilter"></label>
      <InputGroup mt="5">
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          display="block"
          size="md"
          id="exampleInputFilter"
          name="text"
          onChange={handleChange}
          maxW="300px"
          placeholder="Name"
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          bg={colorMode === 'dark' ? 'brand.900' : 'white'}
        />
      </InputGroup>
    </div>
  );
}
