import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getAllContacts = async () => {
  const data = await axios.get('/Contacts');
  return data;
};

export const deleteContact = async id => {
  const data = await axios.delete(`/Contacts/${id}`);
  return data;
};

export const addContact = async newContact => {
  const data = await axios.post('/Contacts', newContact);
  return data;
};

export const registerNewUser = async credentials => {
  const data = axios.post('/users/signup', credentials);
  return data;
};

export const logInUser = async credentials => {
  const data = axios.post('/users/login', credentials);
  return data;
};

export const logOutUser = async token => {
  const data = axios.post('/users/logout', token);
  return data;
};
