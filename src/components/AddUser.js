import { useState } from "react";
import { FiHome, FiUserPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../redux/userAction";
import { Button } from "../styles/Button";
import { Container } from "../styles/Container";
import { Global } from "../styles/Global";
import { Header } from "../styles/Header";
import { StyledForm, StyledInput } from "../styles/StyledForm";

const AddUser = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: null,
  });

  const { first_name, last_name, email, gender, age } = state;

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      first_name === "" ||
      last_name === "" ||
      gender === "" ||
      age === null ||
      email === ""
    ) {
      alert("please fill out the form");
    } else {
      dispatch(addUser(state));
      navigate("/");
    }
  };

  const handelChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Global>
      <Container wd="17em">
        <Header>
          <Link to="/">
            <h1>
              <FiHome />
            </h1>
          </Link>
          <h1>Add User</h1>
        </Header>
        <StyledForm onSubmit={handelSubmit}>
          <StyledInput
            type="text"
            name="first_name"
            placeholder="First Name"
            value={first_name}
            onChange={handelChange}
          />

          <StyledInput
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={last_name}
            onChange={handelChange}
          />

          <StyledInput
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handelChange}
          />

          <StyledInput
            type="number"
            name="age"
            max={99}
            value={age || ""}
            placeholder="age"
            onChange={handelChange}
          />

          <StyledInput
            type="text"
            name="gender"
            value={gender || ""}
            placeholder="gender"
            onChange={handelChange}
          />

          <Button type="submit" bg="#DC7633">
            <FiUserPlus />
            <div>Add User</div>
          </Button>
          {/* <input type="submit" value="Submit" /> */}
        </StyledForm>
      </Container>
    </Global>
  );
};

export default AddUser;
