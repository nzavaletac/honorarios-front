import { Routes, Route } from "react-router-dom";
import { Clientes } from "../components/Clientes/Clientes";

import { NavBar } from "../components/NavBar/NavBar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Body, Container } from "./HonorariosPageElements";

export const HonorariosPage = () => {
  return (
    <Container>
      <NavBar />
      <Sidebar />
      <Body>
        <Routes>
          <Route path="/" element={<Clientes />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </Body>
    </Container>
  );
};
