import { Button, ButtonContainer, Container, Title } from "./ClientesElements";
import { MdAddCircle } from "react-icons/md";

export const Clientes = () => {
  return (
    <Container>
      <Title>Lista de Clientes</Title>
      <ButtonContainer>
        <Button>
          <MdAddCircle size="25px" /> Nuevo Cliente
        </Button>
      </ButtonContainer>
    </Container>
  );
};
