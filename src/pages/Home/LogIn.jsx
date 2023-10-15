import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
// import { getLogIn } from 'redux/selectors';

export default function LogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlyChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Please enter your email and password</h1>
      <form onSubmit={handlySubmit} autoComplete="off">
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handlyChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={handlyChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
