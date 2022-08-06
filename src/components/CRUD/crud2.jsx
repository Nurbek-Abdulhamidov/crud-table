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
  InputsDiv,
  InputWrap,
  SearchDiv,
  Select,
  WrapperInput,
} from "./Crud";

class Crud2 extends Component {
  state = {
    data,
    inputValue: "",
    searchValue: "",
    selectValue: "all",
    selected: null,
    modal: false,
  };
  render() {
    const ageRef = React.createRef("");
    const addressRef = React.createRef("");
    const statusRef = React.createRef("");
    const nicknameRef = React.createRef("");
    const univRef = React.createRef("");
    const jobRef = React.createRef("");
    const nameRef = React.createRef("");
    // const phoneRef = React.createRef("");

    if (this.state.selectValue === "all") {
      this.SearchUser = ({ target }) => {
        let res = data.filter(
          (val) =>
            `${val.id}`.includes(target.value) ||
            val.name.toLowerCase().includes(target.value.toLowerCase())
        );
        this.setState({ data: res ? res : "" });
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
        this.setState({ data: res ? res : "" });
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
              // phone: phoneRef.current.value,
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
          <WrapperInput open={this.state.modal}>
            {this.state.modal && (
              <InputsDiv>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add user . . ."
                    name="inputValue"
                    value={this.state.inputValue}
                    onChange={({ target }) =>
                      this.setState({ inputValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    // width="50px"
                    type="text"
                    padding="8px 5px"
                    placeholder="Age..."
                    name="inputValue"
                    value={this.state.inputValue}
                    onChange={({ target }) =>
                      this.setState({ inputValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add address . . ."
                    name="inputValue"
                    value={this.state.inputValue}
                    onChange={({ target }) =>
                      this.setState({ inputValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add user . . ."
                    name="inputValue"
                    value={this.state.inputValue}
                    onChange={({ target }) =>
                      this.setState({ inputValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add user . . ."
                    name="inputValue"
                    value={this.state.inputValue}
                    onChange={({ target }) =>
                      this.setState({ inputValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add user . . ."
                    name="inputValue"
                    value={this.state.inputValue}
                    onChange={({ target }) =>
                      this.setState({ inputValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add user . . ."
                    name="inputValue"
                    value={this.state.inputValue}
                    onChange={({ target }) =>
                      this.setState({ inputValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="❌❌❌"
                    disabled
                  />
                </InputWrap>
              </InputsDiv>
            )}
          </WrapperInput>
          {this.state.modal === true ? (
            <BtnDiv>
              <Button
                width="150px"
                bg="#2d35d2f7"
                rang="#2d35d2f7"
                onClick={AddUser}
              >
                Add User
              </Button>
              <Button
                width="150px"
                bg="#2d35d2f7"
                rang="#2d35d2f7"
                onClick={() => this.setState({ modal: !this.state.modal })}
              >
                Close Adding
              </Button>
            </BtnDiv>
          ) : (
            <Button
              width="150px"
              bg="#2d35d2f7"
              rang="#2d35d2f7"
              onClick={() => this.setState({ modal: !this.state.modal })}
            >
              New User
            </Button>
          )}
          <SearchDiv>
            <Input
              width="100%"
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
                {/* <th>PHONE</th> */}
                <th>STATUS</th>
                <th>NICKNAME</th>
                <th>UNIVERSITY</th>
                <th>JOB</th>
                <th>ACTION</th>
              </tr>
            </thead>
            {this.state.data.map((value, index) => (
              <tbody key={index}>
                <td>{index + 1}</td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="150px"
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
                      width="100%"
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
                      width="150px"
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
                      width="100%"
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
                      width="100%"
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
                      <Button onClick={SaveItem} bg="#0D64F3" rang="#0D64F3">
                        Save
                      </Button>
                      <Button onClick={CancelItem} bg="red" rang="red">
                        Cancel
                      </Button>
                    </BtnDiv>
                  ) : (
                    <BtnDiv>
                      <Button
                        onClick={() => EditItem(value)}
                        bg="green"
                        rang="green"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => DeleteItem(value)}
                        bg="red"
                        rang="red"
                      >
                        Delete
                      </Button>
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
