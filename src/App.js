import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import Edit from "./components/Edit";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
