import {
  Container,
  UnOrderList,
  Lista,
  Span,
  Subtitle,
  NavLinks,
} from "./SidebarElements";
import { FaUsers, FaKey } from "react-icons/fa";
import { RiMoneyDollarBoxFill, RiLogoutBoxRFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <Container>
      <UnOrderList>
        <NavLinks to="/admin/clientes" active="true">
          <Lista>
            <Span>
              <FaUsers size="30px" />
            </Span>
            <Subtitle>Clientes</Subtitle>
          </Lista>
        </NavLinks>
        <NavLinks to="/admin/clave" active="true">
          <Lista>
            <Span>
              <FaKey size="30px" />
            </Span>
            <Subtitle> Clave Sol</Subtitle>
          </Lista>
        </NavLinks>
        <NavLinks to="/admin/honorarios" active="true">
          <Lista>
            <Span>
              <RiMoneyDollarBoxFill size="35px" />
            </Span>
            <Subtitle>Honorarios</Subtitle>
          </Lista>
        </NavLinks>
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
      </UnOrderList>
    </Container>
  );
};
