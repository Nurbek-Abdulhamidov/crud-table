import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
`;

export const InputSearch = styled.input`
  padding: 8px 10px;
  color: blue;
  font-size: 22px;
  width: ${({ widthh }) => (widthh ? widthh : "200px")};
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DivAll = styled.div`
  transform: scale(${({ open }) => (open === true ? 1 : 0)});
  transition: all 0.3s linear;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ bg }) => (bg ? bg : "blue")};
  color: ${({ rang }) => (rang ? rang : "white")};
  border: 2px solid ${({ border }) => (border ? border : "none")};
  outline: none;
  margin: ${({ mar }) => (mar ? mar : "5px ")};
  border-radius: 10px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
    transition: all 0.3s linear;
  }
`;
