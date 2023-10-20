import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { getUserName } from 'redux/selectors';
import defaultAvatar from '../../images/free-icon-hacker-924915.png';
import { Button, Flex, Spacer } from '@chakra-ui/react';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  const handlyClick = () => {
    dispatch(logOut());
  };

  return (
    <Flex justifyContent="end" alignItems="center">
      <img src={avatar} alt="avatar" width="32" />
      <Spacer w="4" />
      <p>Hello, {name}!</p>
      <Spacer w="4" />
      <Button type="button" onClick={handlyClick} colorScheme="blackAlpha">
        Logout
      </Button>
    </Flex>
  );
}
