import "./App.css";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./component/MovieDetail";
import Main from "./component/Main";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/details/:id" element={<MovieDetail />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
