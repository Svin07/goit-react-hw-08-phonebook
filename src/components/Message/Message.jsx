import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

export default function Message({ text }) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{text} </AlertTitle>
    </Alert>
  );
}
