import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Column = styled.div`
  flex: 100%;
  text-align: center;
`;

export const Form = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  border-radius: 15px;
`;

export const ButtonSubmit = styled.button`
  border-radius: 50px;
  background-color: #2d2e2e;
  color: #fff;
`;
