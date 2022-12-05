import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/userAction";
import { Button } from "../styles/Button";
import { Container } from "../styles/Container";
import { Global } from "../styles/Global";
import { Header } from "../styles/Header";
import { StyledForm, StyledInput } from "../styles/StyledForm";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let users = useSelector((state) => state.userReducer);

  const { id } = useParams();

  let existingUser = users.filter((user) => {
    return user.id == id;
  });

  const { first_name, last_name, email, gender, age } = existingUser[0];
  const [state, setState] = useState({
    first_name,
    last_name,
    email,
    gender,
    age,
    id,
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(state));
    navigate("/");
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
          <h1>Edit User</h1>
        </Header>
        <StyledForm onSubmit={handelSubmit}>
          <StyledInput
            type="text"
            name="first_name"
            placeholder="First Name"
            value={state.first_name}
            onChange={handelChange}
          />
          <StyledInput
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={state.last_name}
            onChange={handelChange}
          />
          <StyledInput
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handelChange}
          />
          <StyledInput
            type="number"
            name="age"
            placeholder="age"
            value={state.age}
            onChange={handelChange}
          />
          <StyledInput
            type="text"
            name="gender"
            placeholder="gender"
            value={state.gender}
            onChange={handelChange}
          />
          <Button
            bg="#73C6B6"
            type="submit"
            value="Submit"
            onSubmit={handelSubmit}
          >
            Update
          </Button>
        </StyledForm>
      </Container>
    </Global>
  );
};

export default Edit;
