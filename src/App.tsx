import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import CreateNickname from "./pages/CreateNickname";
import Problem from "./pages/Problem";
import Result from "./pages/Result";
import { GlobalStyle } from "./styles/Globalstyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nick" element={<CreateNickname />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
