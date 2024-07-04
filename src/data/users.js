// data/users.js
let users = [];

export const addUser = (user) => {
  users.push(user);
};

export const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

export const resetUsers = () => {
  users = [];
};

