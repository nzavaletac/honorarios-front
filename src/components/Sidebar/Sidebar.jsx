import { Container, Lista, Span, Subtitle } from "./SidebarElements";
import { FaUsers, FaKey } from "react-icons/fa";
import { RiMoneyDollarBoxFill, RiLogoutBoxRFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <Container>
      <ul>
        <Lista>
          <Span>
            <FaUsers size="30px" />
          </Span>
          <Subtitle>Clientes</Subtitle>
        </Lista>
        <Lista>
          <Span>
            <FaKey size="30px" />
          </Span>
          <Subtitle> Clave Sol</Subtitle>
        </Lista>
        <Lista>
          <Span>
            <RiMoneyDollarBoxFill size="35px" />
          </Span>
          <Subtitle>Honorarios</Subtitle>
        </Lista>
        <hr />
        <Lista>
          <Span>
            <AiFillSetting size="35px" />
          </Span>
          <Subtitle>Settings</Subtitle>
        </Lista>
        <Lista>
          <Span>
            <RiLogoutBoxRFill size="35px" />
          </Span>
          <Subtitle>Salir</Subtitle>
        </Lista>
      </ul>
    </Container>
  );
};
