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
    const ageRef = React.createRef("");
    const addressRef = React.createRef("");
    const statusRef = React.createRef("");
    const nicknameRef = React.createRef("");
    const univRef = React.createRef("");
    const jobRef = React.createRef("");
    const nameRef = React.createRef("");
    const phoneRef = React.createRef("");

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
          ? {
              ...value,
              name: nameRef.current.value,
              age: ageRef.current.value,
              address: addressRef.current.value,
              status: statusRef.current.value,
              nickname: nicknameRef.current.value,
              univ: univRef.current.value,
              job: jobRef.current.value,
              phone: phoneRef.current.value,
            }
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
            <select
              onChange={({ target }) =>
                this.setState({ selectValue: target.value })
              }
            >
              <option value="all">All</option>
              <option value="id">Id</option>
              <option value="name">Name</option>
            </select>
          </SearchDiv>
        </InputContainer>
        <ElementContainer>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>ADDRESS</th>
                <th>PHONE</th>
                <th>STATUS</th>
                <th>NICKNAME</th>
                <th>UNIVERSITY</th>
                <th>JOB</th>
                <th>ACTION</th>
              </tr>
            </thead>
            {this.state.data.map((value, index) => (
              <tbody key={index}>
                <td>{value.id}</td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="250px"
                      ref={nameRef}
                      type="text"
                      defaultValue={this.state.selected.name}
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="40px"
                      ref={ageRef}
                      type="number"
                      defaultValue={this.state.selected.age}
                    />
                  ) : (
                    value.age
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="120px"
                      ref={addressRef}
                      type="text"
                      defaultValue={this.state.selected.address}
                    />
                  ) : (
                    value.address
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="120px"
                      ref={phoneRef}
                      type="text"
                      defaultValue={this.state.selected.phone}
                    />
                  ) : (
                    value.phone
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="80px"
                      ref={statusRef}
                      type="text"
                      defaultValue={this.state.selected.status}
                    />
                  ) : (
                    value.status
                  )}
                </td>
                <td>
                  {" "}
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="90px"
                      ref={nicknameRef}
                      type="text"
                      defaultValue={this.state.selected.nickname}
                    />
                  ) : (
                    value.nickname
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="150px"
                      ref={univRef}
                      type="text"
                      defaultValue={this.state.selected.univ}
                    />
                  ) : (
                    value.univ
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="100px"
                      ref={jobRef}
                      type="text"
                      defaultValue={this.state.selected.job}
                    />
                  ) : (
                    value.job
                  )}
                </td>

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
              </tbody>
            ))}
          </table>
        </ElementContainer>
      </Container>
    );
  }
}

export default Crud2;
