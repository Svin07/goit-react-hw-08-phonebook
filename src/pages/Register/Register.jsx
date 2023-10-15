import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/operations';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlyChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Please register</h1>
      <form onSubmit={handlySubmit} autoComplete="off">
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handlyChange} />
        </label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
