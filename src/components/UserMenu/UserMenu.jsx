import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { getUserName } from 'redux/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = '../../../public/free-icon-hacker-924915.png';

  const handlyClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <img src={avatar} alt="avatar" width="32" />
      <p>Hello,{name}</p>
      <button type="button" onClick={handlyClick}>
        Logout
      </button>
    </div>
  );
}
