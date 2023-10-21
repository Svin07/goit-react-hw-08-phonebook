import { useDispatch } from 'react-redux';

import { removeContact } from 'redux/operations';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function ContactItem({ contact }) {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <Flex
      as="li"
      gap={4}
      justify="space-between"
      alignItems="center"
      maxW="500px"
      p="2"
      border="1px"
      borderColor={colorMode === 'dark' ? 'brand.900' : 'brand.100'}
      borderRadius="md"
      _hover={{ shadow: 'lg' }}
    >
      <Box>
        <Heading as="h5" size="md" isTruncated>
          {contact.name}:
        </Heading>
        <Text fontSize="xl">{contact.number}</Text>
      </Box>

      <IconButton
        variant="outline"
        colorScheme={colorMode === 'dark' ? 'brand.900' : 'white'}
        aria-label="Send email"
        type="button"
        bg={colorMode === 'dark' ? 'whiteAlpha.400' : 'blackAlpha.400'}
        onClick={() => handleDelete(contact.id)}
        icon={<CloseIcon />}
      />
    </Flex>
  );
}
