import { ADD_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "./actionTypes";

export const getUsers = () => {
  return { type: GET_USERS };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

export const updateUser = (state) => {
  return {
    type: UPDATE_USER,
    state,
  };
};
