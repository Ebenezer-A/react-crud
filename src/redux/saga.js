import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  LIST_USERS,
  UPDATE_USER,
} from "./actionTypes";

function* fetchUsers() {
  try {
    let users = yield axios
      .get("http://localhost:3004/users/")
      .then((response) => {
        return response.data;
      });

    console.log("get user saga", users);
    yield put({ type: LIST_USERS, users });
  } catch (error) {
    console.log(error);
  }
}

function* deleteUser(data) {
  try {
    yield axios.delete(`http://localhost:3004/users/${data.id}`);
    console.log("delete user saga");
    yield put({ type: GET_USERS });
  } catch (error) {
    console.log(error);
  }
}

function* createUser(data) {
  try {
    yield axios
      .post("http://localhost:3004/users", data.user)
      .then(() => console.log("User added"));
    yield put({ type: GET_USERS });
  } catch (error) {
    console.log(error);
  }
}

function* updateUser(data) {
  try {
    yield axios.put(`http://localhost:3004/users/${data.state.id}`, data.state);
    console.log("user udate saga", data.state);
    yield put({ type: GET_USERS });
  } catch (error) {
    console.log(error);
  }
}

function* saga() {
  yield takeEvery(GET_USERS, fetchUsers);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeEvery(ADD_USER, createUser);
  yield takeEvery(UPDATE_USER, updateUser);
}

export default saga;
