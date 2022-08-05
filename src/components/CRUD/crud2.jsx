import React, { Component } from "react";
import "../style.css";
import { data } from "../../Data";
import {
  BtnDiv,
  Button,
  Container,
  ElementContainer,
  Input,
  InputContainer,
  InputWrap,
  SearchDiv,
  Select,
} from "./Crud";

class Crud2 extends Component {
  state = {
    data,
    inputValue: "",
    searchValue: "",
    selectValue: "all",
    selected: null,
    warning: "",
  };
  render() {
    const inputRef = React.createRef("");

    if (this.state.selectValue === "all") {
      this.SearchUser = ({ target }) => {
        let res = data.filter(
          (val) =>
            `${val.id}`.includes(target.value) ||
            val.name.toLowerCase().includes(target.value.toLowerCase())
        );
        this.setState({ data: res.length && res });
      };
    } else if (this.state.selectValue === "id") {
      this.SearchUser = ({ target }) => {
        let res = data.filter((val) => `${val.id}`.includes(target.value));
        this.setState({ data: res ? res : data });
      };
    } else {
      this.SearchUser = ({ target }) => {
        let res = data.filter((val) =>
          val.name.toLowerCase().includes(target.value.toLowerCase())
        );
        this.setState({ data: res.length && res });
      };
    }

    const AddUser = () => {
      this.state.inputValue.length > 0 &&
        this.setState({
          data: [
            ...this.state.data,
            {
              id: this.state.data.length + 1,
              name: this.state.inputValue,
            },
          ],
        });
      this.setState({ inputValue: "" });
    };

    const EditItem = (value) => {
      this.setState({
        selected: value,
      });
    };

    const SaveItem = () => {
      let res = this.state.data.map((value) =>
        value.id === this.state.selected?.id
          ? { ...value, name: inputRef.current.value }
          : value
      );
      this.setState({
        data: res,
        selected: null,
      });
    };

    const CancelItem = () => {
      this.setState({
        selected: null,
      });
    };

    const DeleteItem = (value) => {
      this.setState({
        data: this.state.data.filter((val) => val.id !== value.id),
      });
    };
    console.log(this.state.selectValue);
    return (
      <Container>
        <InputContainer>
          <InputWrap>
            <Input
              width="89%"
              type="text"
              placeholder="Add user . . ."
              name="inputValue"
              value={this.state.inputValue}
              onChange={({ target }) =>
                this.setState({ inputValue: target.value })
              }
            />
            <Button onClick={AddUser}>Add User</Button>
          </InputWrap>
          <SearchDiv>
            <Input
              width="89%"
              type="text"
              placeholder="Search users . . ."
              onChange={this.SearchUser}
            />
            <Select
              onChange={({ target }) =>
                this.setState({ selectValue: target.value })
              }
            >
              <option value="all">all</option>
              <option value="id">ID</option>
              <option value="name">Name</option>
            </Select>
          </SearchDiv>
        </InputContainer>
        <ElementContainer>
          <table border={1} style={{ borderCollapse: "collapse" }}>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>ADDRESS</th>
              <th>STATUS</th>
              <th>NICKNAME</th>
              <th>UNIV</th>
              <th>JOB</th>
              <th>EDIT</th>
            </tr>
            {this.state.data.map((value, index) => (
              <tr key={index}>
                <td>{value.id}</td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <input
                      ref={inputRef}
                      type="text"
                      defaultValue={this.state.selected.name}
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>{value.age}</td>
                <td>{value.address}</td>
                <td>{value.status}</td>
                <td>{value.nickname}</td>
                <td>{value.univ}</td>
                <td>{value.job}</td>

                <td>
                  {this.state.selected?.id === value.id ? (
                    <BtnDiv>
                      <Button onClick={SaveItem}>Save</Button>
                      <Button onClick={CancelItem}>Cancel</Button>
                    </BtnDiv>
                  ) : (
                    <BtnDiv>
                      <Button onClick={() => EditItem(value)}>Edit</Button>
                      <Button onClick={() => DeleteItem(value)}>Delete</Button>
                    </BtnDiv>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </ElementContainer>
      </Container>
    );
  }
}

export default Crud2;
