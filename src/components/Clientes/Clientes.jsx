import { useState } from "react";
import { Button, ButtonContainer, Container, Title } from "./ClientesElements";
import { MdAddCircle } from "react-icons/md";
import { ModalNuevoCliente } from "../Modal/ModalNuevoCliente";

export const Clientes = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalNuevoCliente
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <Container>
        <Title>Lista de Clientes</Title>
        <ButtonContainer>
          <Button onClick={handleShow}>
            <MdAddCircle size="25px" /> Nuevo Cliente
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};