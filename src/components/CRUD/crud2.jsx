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
  Note,
  SearchDiv,
  Select,
  WrapperInput,
} from "./Crud";

class Crud2 extends Component {
  state = {
    data,
    inputValue: "",
    ageValue: "",
    addressValue: "",
    statusValue: "",
    nicknameValue: "",
    univValue: "",
    jobValue: "",
    selectValue: "all",
    selected: null,
    modal: false,
    font: "Montserrat",
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
            `${val.age}`.includes(target.value) ||
            `${val.id}`.includes(target.value) ||
            val.name.toLowerCase().includes(target.value.toLowerCase()) ||
            val.address.toLowerCase().includes(target.value.toLowerCase()) ||
            val.status.toLowerCase().includes(target.value.toLowerCase()) ||
            val.nickname.toLowerCase().includes(target.value.toLowerCase()) ||
            val.univ.toLowerCase().includes(target.value.toLowerCase()) ||
            val.job.toLowerCase().includes(target.value.toLowerCase())
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
              age: this.state.ageValue,
              address: this.state.addressValue,
              status: this.state.statusValue,
              nickname: this.state.nicknameValue,
              univ: this.state.univValue,
              job: this.state.jobValue,
            },
          ],
        });
      this.setState({ inputValue: "" });
      this.setState({ ageValue: "" });
      this.setState({ addressValue: "" });
      this.setState({ statusValue: "" });
      this.setState({ nicknameValue: "" });
      this.setState({ univValue: "" });
      this.setState({ jobValue: "" });
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

    const DoubleClick = (value) => {
      this.setState({
        selected: value,
      });
      console.log(this.state.selected);
    };

    return (
      <Container font={this.state.font}>
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
                    name="ageValue"
                    value={this.state.ageValue}
                    onChange={({ target }) =>
                      this.setState({ ageValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add address . . ."
                    name="addressValue"
                    value={this.state.addressValue}
                    onChange={({ target }) =>
                      this.setState({ addressValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add status . . ."
                    name="statusValue"
                    value={this.state.statusValue}
                    onChange={({ target }) =>
                      this.setState({ statusValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add nickname . . ."
                    name="nicknameValue"
                    value={this.state.nicknameValue}
                    onChange={({ target }) =>
                      this.setState({ nicknameValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add university . . ."
                    name="univValue"
                    value={this.state.univValue}
                    onChange={({ target }) =>
                      this.setState({ univValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    type="text"
                    padding="8px 5px"
                    placeholder="Add job . . ."
                    name="jobValue"
                    value={this.state.jobValue}
                    onChange={({ target }) =>
                      this.setState({ jobValue: target.value })
                    }
                  />
                </InputWrap>
                <InputWrap>
                  <Input
                    warn="not-allowed"
                    type="text"
                    padding="8px 5px"
                    placeholder=""
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
                bg="#08b81af7"
                rang="#08b81af7"
                onClick={AddUser}
              >
                Add User
              </Button>
              <Button
                width="150px"
                bg="#a81717f7"
                rang="#d22d2df7"
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
              padding="10px"
              width="100%"
              type="text"
              placeholder="Search users . . .   🔍"
              onChange={this.SearchUser}
            />
            <Select
              onChange={({ target }) =>
                this.setState({ selectValue: target.value })
              }
            >
              <option value="all">All</option>
              <option value="id">Id</option>
              <option value="name">Name</option>
            </Select>
            <Select
              name=""
              id=""
              onChange={({ target }) => this.setState({ font: target.value })}
            >
              <option value="Nunito">Nunito</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Roboto">Roboto</option>
              <option value="Alegreya SC">Alegreya</option>
              <option value="Poppins">Poppins</option>
              <option value="Ultra">Ultra</option>
            </Select>
          </SearchDiv>
        </InputContainer>
        <ElementContainer>
          <Note>You can edit element on double click</Note>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>ADDRESS</th>
                <th>STATUS</th>
                <th>NICKNAME</th>
                <th>UNIVERSITY</th>
                <th>JOB</th>
                <th>ACTION</th>
              </tr>
            </thead>
            {this.state.data.map((value, index) => (
              <tbody key={index} onDoubleClick={() => DoubleClick(value)}>
                <td>{index + 1}</td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <Input
                      width="200px"
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
                      width="45px"
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
                      width="90%"
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
                      width="90%"
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
                        ✏️ Edit
                      </Button>
                      <Button
                        onClick={() => DeleteItem(value)}
                        bg="red"
                        rang="red"
                      >
                        ❌ Delete
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
