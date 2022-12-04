import { useEffect } from "react";
import { FiUserPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUsers } from "../redux/userAction";
import { Button } from "../styles/Button";
import { Container } from "../styles/Container";
import { Global } from "../styles/Global";
import { GridStyle } from "../styles/GridStyle";

const Main = () => {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.userReducer);
  let navigate = useNavigate();

  console.log("main component", users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Global>
      <Container wd="90%">
        <h1>Users</h1>
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <GridStyle>
                <div>{user.first_name + " " + user.last_name}</div>
                <div>{user.email}</div>
                <div>{user.age}</div>
                <div>{user.gender}</div>

                <div>
                  <Button
                    bg="#85929E"
                    onClick={() => dispatch(deleteUser(user.id))}
                  >
                    Delete
                  </Button>
                </div>
                <div>
                  <Button
                    bg="#73C6B6"
                    onClick={() => navigate(`/edit/${user.id}`)}
                  >
                    Update
                  </Button>
                </div>
              </GridStyle>
            </div>
          ))}
        </div>
        <Button bg="#DC7633" onClick={() => navigate("/adduser")}>
          <FiUserPlus />
          Add Users
        </Button>
      </Container>
    </Global>
  );
};

export default Main;
