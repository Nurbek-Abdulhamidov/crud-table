import React, { Component } from "react";
import {
  Button,
  Container,
  DivAll,
  FlexContainer,
  InputSearch,
} from "./style.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: [],
      firstName: "",
      lastName: "",
      address: "",
      selected: null,
      firstName2: "",
      lastName2: "",
      address2: "",
      searchUser: "",
    };
  }

  editUser(value) {
    this.setState({
      selected: value.id,
      firstName2: value.firstName,
      lastName2: value.lastName,
      address2: value.address,
    });
  }

  onChangeAll(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeAll2(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addUser() {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          address: this.state.address,
        },
      ],
    });
    this.state.firstName = "";
    this.state.lastName = "";
    this.state.address = "";
  }

  Onsave() {
    this.setState({
      data: this.state.data.map((value) =>
        this.state.selected === value.id
          ? {
              firstName: this.state.firstName2,
              lastName: this.state.lastName2,
              address: this.state.address2,
            }
          : value
      ),
    });
  }
  render() {
    const { firstName, lastName, address, firstName2, lastName2, address2 } =
      this.state;
    console.log(firstName2, lastName2, address2);
    return (
      <Container>
        <FlexContainer>
          <InputSearch
            placeholder="Search users"
            widthh="300px"
            onChange={(e) => this.setState({ searchUser: e.target.value })}
          />
          {this.state.modal === true ? (
            <Button onClick={() => this.addUser()}>Add User</Button>
          ) : (
            <Button onClick={() => this.setState({ modal: !this.state.modal })}>
              New User
            </Button>
          )}
        </FlexContainer>
        <DivAll open={this.state.modal}>
          {this.state.modal && (
            <FlexContainer>
              <InputSearch
                placeholder="Firstname"
                name="firstName"
                value={this.state.firstName}
                onChange={(e) => this.onChangeAll(e)}
              />
              <InputSearch
                placeholder="Lastname"
                name="lastName"
                value={this.state.lastName}
                onChange={(e) => this.onChangeAll(e)}
              />
              <InputSearch
                placeholder="Address"
                name="address"
                value={this.state.address}
                onChange={(e) => this.onChangeAll(e)}
              />
            </FlexContainer>
          )}
        </DivAll>
        <table border={1} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr border={1} >
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(
              (value) =>
                (value.firstName
                  .toLowerCase()
                  .includes(this.state.searchUser.toLowerCase()) ||
                  value.lastame
                    .toLowerCase()
                    .includes(this.state.searchUser.toLowerCase()) ||
                  value.address
                    .toLowerCase()
                    .includes(this.state.searchUser.toLowerCase())) && (
                  <tr>
                    {this.state.selected === value.id ? (
                      <>
                        <td>
                          <InputSearch
                            name="firstName2"
                            value={this.state.firstName2}
                            widthh="150px"
                            onChange={(e) => this.onChangeAll2(e)}
                          />
                        </td>
                        <td>
                          <InputSearch
                            name="lastName2"
                            value={this.state.lastName2}
                            widthh="150px"
                            onChange={(e) => this.onChangeAll2(e)}
                          />
                        </td>
                        <td>
                          <InputSearch
                            name="address2"
                            value={this.state.address2}
                            widthh="150px"
                            onChange={(e) => this.onChangeAll2(e)}
                          />
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{value.firstName}</td>
                        <td>{value.lastName}</td>
                        <td>{value.address}</td>
                      </>
                    )}
                    <td>
                      <Button
                        rang="red"
                        bg="white"
                        border="red"
                        mar="10px"
                        onClick={() =>
                          this.setState({
                            data: this.state.data.filter(
                              (val) => val.id !== value.id
                            ),
                          })
                        }
                      >
                        Delete
                      </Button>
                      {this.state.selected === value.id ? (
                        <Button
                          rang="#B871E2 "
                          bg="white"
                          border="#B871E2 "
                          mar="0px"
                          onClick={() => this.Onsave()}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          rang="green"
                          bg="white"
                          border="green "
                          mar="10px"
                          onClick={() => this.editUser(value)}
                        >
                          Edit
                        </Button>
                      )}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </Container>
    );
  }
}

export default App;
<ElementContainer>
<table>
  <thead>
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