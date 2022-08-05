import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 1450px;
  height: 90vh;
  padding: 0 20px;
  border-radius: 10px;
  overflow-y: scroll;
  border: 2px solid #f4f4f4;
  :hover {
    -webkit-box-shadow: 0px 1px 17px 3px rgba(0, 0, 0, 0.71);
    box-shadow: 0px 1px 17px 3px rgba(0, 0, 0, 0.71);
  }
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
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 5px;
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
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 10px 15px;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  all: unset;
  background-color: green;
  padding: 10px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

export const Select = styled.select`
  padding: 5px;
`;
