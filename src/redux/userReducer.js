import { LIST_USERS } from "./actionTypes";

const userReducer = (users = [], action) => {
  switch (action.type) {
    case LIST_USERS:
      console.log("list users reducer", action.users);
      return [...action.users];
    default:
      return users;
  }
};
export default userReducer;
