import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  position: relative;
  width: 1470px;
  height: 95vh;
  padding: 0 20px;
  border-radius: 10px;
  overflow: scroll;
`;

export const InputContainer = styled.div`
  position: sticky;
  top: 0px;
  padding: 20px 0;
  z-index: 0;
  width: 100%;
  background-color: #ffff;
`;

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #0000;
  background-color: #ffff;
`;

export const ElementContainer = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    width: 100%;
    border-radius: 10px;
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
    padding: 10px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  all: unset;
  border: 1px solid #000;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 10px;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  all: unset;
  background-color: green;
  padding: 5px 10px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

export const Select = styled.select`
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
`;
