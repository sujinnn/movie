import "./App.css";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./component/MovieDetail";
import Main from "./component/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/details/:id" element={<MovieDetail />}></Route>
    </Routes>
  );
}

export default App;
