import styled from "styled-components";

export const Container = styled.div`
  color: #fafafa;
  background-color: #2d2e2e;
  height: calc(100vh - 100px);
  width: 15%;
  display: flex;
  flex-direction: column;
`;

export const Lista = styled.li`
  color: #fafafa;
  padding: 25px;
  background-color: #2d2e2e;
  /* justify-content: center; */
  display: flex;
  &:hover {
    background-color: #fafafa;
    cursor: pointer;
    color: #2d2e2e;
  }
`;

export const Span = styled.span`
  margin-right: 15px;
`;

export const Subtitle = styled.p`
  margin-right: 15px;
`;
