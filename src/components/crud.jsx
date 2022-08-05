import React, { Component } from "react";
import "./style.css";
import { data } from "../Data";

class Crud extends Component {
  state = {
    data,
    searchValue: "",
    inputValue: "",
    selected: null,
  };
  render() {
    const inputRef = React.createRef("");
    const addUser = () => {
      this.setState({
        data: [
          ...this.state.data,
          { id: this.state.data.id, name: this.state.inputValue },
        ],
      });
    };

    const deleteUser = (id) => {
      this.setState({ data: this.state.data.filter((val) => val.id !== id) });
    };

    const searchUser = ({ target }) => {
      let res = this.state.data.filter((val) =>
        val.name.toLowerCase().includes(target.value)
      );
      this.setState({ data: res.length ? res : data });
    };

    const editUser = (value) => {
      this.setState({ selected: value });
    };

    const saveUser = (value) => {
      console.log(inputRef.current);
      let res = this.state.data.map((value) =>
        value.id === this.state.selected?.id
          ? { ...value, name: inputRef.current.value }
          : value
      );
      this.setState({ data: res, selected: null });
    };

    const cancelUser = () => {
      this.setState({ selected: null });
    };

    const AddUser = ({ target }) => {
      this.setState({
        inputValue: target.value,
      });
    };
    return (
      <div>
        <h1>Crud</h1>
        <>
          <input
            type="text"
            placeholder="Search user..."
            onChange={({ target }) => searchUser({ target })}
          />
          <br />
          <input
            type="text"
            placeholder="Add name..."
            onChange={({ target }) => AddUser({ target })}
          />
          <button onClick={addUser}>Add</button>
        </>
        {this.state.data.map((value, index) => (
          <div>
            <h4>
              {value.id} -
              {this.state.selected?.id === value.id ? (
                <input
                  ref={inputRef}
                  type="text"
                  defaultValue={this.state.selected.name}
                />
              ) : (
                value.name
              )}
              {this.state.selected?.id === value.id ? (
                <>
                  <button onClick={() => saveUser(value)}>save</button>
                  <button onClick={cancelUser}>cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => editUser(value)}>edit</button>
                  <button onClick={() => deleteUser(value.id)}>Delete</button>
                </>
              )}
            </h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Crud;
