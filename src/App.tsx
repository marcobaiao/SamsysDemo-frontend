import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EditClient from "./pages/client/editClient";
import Home from "./pages/home";
import Clients from "./pages/clients";
import AddClient from "./pages/client/addClient";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />

          <Route path="/clients" element={<Clients />} />

          <Route path="/clients/add" element={<AddClient />} />

          <Route path="/client/edit/:id" element={<EditClient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
