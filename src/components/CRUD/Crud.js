import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  position: relative;
  height: 90vh;
  padding: 0 0px;
  border-radius: 10px;

  width: 1400px;

  @media (max-width: 1400px) {
    width: 1350px;
  }

  @media (max-width: 1300px) {
    width: 1250px;
  }

  @media (max-width: 1200px) {
    width: 1150px;
  }

  @media (max-width: 1100px) {
    width: 1050px;
  }

  @media (max-width: 1000px) {
    width: 950px;
  }

  @media (max-width: 900px) {
    width: 800px;
  }

  @media (max-width: 800px) {
    width: 700px;
  }
`;

export const InputsDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

export const InputContainer = styled.div`
  display: ${({ close }) => (close === true ? "none" : "grid")};
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: #ffff;
`;

export const WrapperInput = styled.div`
  transform: scale(${({ open }) => (open === true ? 1 : 0)});
  transition: all 0.3s linear;
`;

export const SearchDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  margin: 15px 0;
`;

export const InputWrap = styled.div`
  margin: 10px 0;
`;

export const Input = styled.input`
  all: unset;
  padding: ${({ padding }) => (padding ? padding : "5px")};
  border: 1px solid #000;
  background-color: #f4f4f4;
  border-radius: 5px;
  width: ${({ width }) => (width ? width : "")};
`;

export const ElementContainer = styled.div`
  position: relative;
  overflow: scroll;
  z-index: 7;
  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
  }

  thead {
    position: sticky;
    top: 0px;
    left: 0;
    z-index: 5;
    background-color: #fff;

    th {
      padding: 15px 20px;
    }
  }

  tbody {
    position: relative;
  }

  thead th:nth-child(1),
  tbody td:nth-child(1) {
    z-index: 1;
    position: sticky;
    left: -1px;
    background-color: #fff;
    padding: 0 15px;
  }

  thead th:nth-child(10),
  tbody td:nth-child(10) {
    z-index: 1;
    position: sticky;
    right: 0px;
    background-color: #fff;
    padding: 0 15px;
  }

  td {
    font-size: 16px;
  }

  th {
    font-size: 18px;
    font-weight: 550;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 11px;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  all: unset;
  text-align: center;
  width: ${({ width }) => (width ? width : "")};
  border: 2px solid ${({ rang }) => (rang ? rang : "#000")};
  padding: 5px 10px;
  color: ${({ rang }) => (rang ? rang : "")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  :active {
    transform: scale(0.9);
    transition: all 0.1s linear;
  }
  :hover {
    background-color: ${({ bg }) => (bg ? bg : "#fff")};
    color: #fff;
  }
`;

export const Select = styled.select`
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
