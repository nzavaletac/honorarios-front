import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  align-items: center;
  background-color: #2d2e2e;
  display: flex;
  height: 100px;
  justify-content: space-between;
  top: 0;
  width: 100%;
  position: sticky;
  z-index: 20;
`;

export const Logo = styled.img`
  margin-left: 30px;
  width: 100px;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  color: #fafafa;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #0071e3;
  }
`;
