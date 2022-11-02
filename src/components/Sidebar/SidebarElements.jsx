import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  color: #fafafa;
  background-color: #2d2e2e;
  height: calc(100vh - 100px);
  width: 15%;
  display: flex;
  flex-direction: column;
`;

export const UnOrderList = styled.ul`
  width: 100%;
  padding: 0px 0px 0px 0px;
`;

export const Lista = styled.li`
  color: #fafafa;
  padding: 20px;
  background-color: #2d2e2e;
  display: flex;
  width: 100%;
  &:hover {
    background-color: #fafafa;
    cursor: pointer;
    color: #2d2e2e;
  }
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
    background-color: red;
    cursor: pointer;
    color: #2d2e2e;
  }
`;
