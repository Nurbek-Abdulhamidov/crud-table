import React, { Component } from "react";
import "./style.css";
import { data } from "../Data";

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
      <div className="container">
        <div className="inputContainer">
          <div className="inputWrap">
            <input
              type="text"
              placeholder="Add user . . ."
              name="inputValue"
              value={this.state.inputValue}
              onChange={({ target }) =>
                this.setState({ inputValue: target.value })
              }
            />
            <button onClick={AddUser}>Add User</button>
          </div>
          <div className="searchDiv">
            <input
              type="text"
              placeholder="Search users . . ."
              onChange={this.SearchUser}
            />
            <select
              onChange={({ target }) =>
                this.setState({ selectValue: target.value })
              }
            >
              <option value="all">all</option>
              <option value="id">ID</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <ul>
          {this.state.data.map((value, index) => (
            <li key={index}>
              {this.state.selected?.id === value.id ? (
                <input
                  ref={inputRef}
                  type="text"
                  defaultValue={this.state.selected.name}
                />
              ) : (
                value.id
              )}
              - {value.name}
              {this.state.selected?.id === value.id ? (
                <div className="btnDiv">
                  <button onClick={SaveItem}>Save</button>
                  <button onClick={CancelItem}>Cancel</button>
                </div>
              ) : (
                <div className="btnDiv">
                  <button onClick={() => EditItem(value)}>Edit</button>
                  <button onClick={() => DeleteItem(value)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Crud2;
