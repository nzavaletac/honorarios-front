import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  color: #fafafa;
  background-color: #2d2e2e;
  height: calc(100vh - 0px);
  width: 15%;
  display: table;
  flex-direction: column;
`;

export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  flex-direction: column;
`;

export const UserName = styled.p`
  display: flex;
  padding: 10px 0px 0px 0px;
`;

export const UnOrderList = styled.ul`
  width: 100%;
  padding: 0px 0px 0px 0px;
`;

export const Lista = styled.li`
  color: #fafafa;
  padding: 20px;
  display: flex;
  width: 100%;
  cursor: pointer;
`;

export const Span = styled.span`
  margin-right: 15px;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const Subtitle = styled.p`
  margin: 0px 0px 0px 0px;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;

  &.active {
    & li {
      background-color: #fafafa;
      cursor: pointer;
      color: #2d2e2e;
    }
  }
`;
