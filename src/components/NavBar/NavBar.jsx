import { Link } from "react-router-dom";
import { Header, Logo, NavBtn, NavBtnLink } from "./NavBarElements";
import logo from "../../assets/Logo.jpg";

export const NavBar = () => {
  return (
    <Header>
      <Link to="/honorarios">
        <Logo src={logo} />
      </Link>
      <NavBtn>
        <NavBtnLink to="/honorarios">¡Hola! Cielo</NavBtnLink>
      </NavBtn>
    </Header>
  );
};
