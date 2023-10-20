export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getIsErrorContacts = state => state.contacts.error;
export const getFilter = state => state.filters.filter;
export const getUserName = state => state.auth.user.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsErrorAuth = state => state.auth.error;
