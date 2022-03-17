import { Container } from "@mui/material";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Home from "./components/Home";
import Inbox from "./components/Inbox";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";

  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/chat/{id}" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
