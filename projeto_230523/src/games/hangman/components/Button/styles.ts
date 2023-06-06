import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  background-color: #1550ff;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;


export const Label = styled.div`
  height: inherit;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
