import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // STATE
    this.state = {};
  }

  handleChange = (event) => {
    // INPUT VALUE
    const value = event.currentTarget.value;
    this.props.onChange(value);
  };

  render() {
    return (
      <div className="search_bar">
        <p id="research" style={{ display: "none" }}>
          {this.state.search}
        </p>
        <form>
          <label>Search by title : </label>
          <input
            value={this.state.search}
            type="text"
            className="search_input"
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}
export default SearchBar;
