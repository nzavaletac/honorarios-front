import React, { useState } from "react";
import { Button, Container, Title } from "./ClientesElements";
import { MdAddCircle } from "react-icons/md";
import { ModalNuevoCliente } from "../Modal/ModalNuevoCliente";
import { ListClient } from "../Tables/ListClient";

export const Clientes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalNuevoCliente show={show} handleClose={handleClose} />
      <Container>
        <Button onClick={handleShow}>
          <MdAddCircle size="25px" /> Nuevo Cliente
        </Button>
        <Title>Lista de Clientes</Title>
      </Container>
      <Container>
        <ListClient />
      </Container>
    </>
  );
};
