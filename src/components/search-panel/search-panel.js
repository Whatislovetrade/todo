import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  // Метод для обработки ввода текста
  onSearchChange = (e) => {
    const term = e.target.value;

    // Обновляем локальное состояние
    this.setState({ term });

    this.props.onSearchChange(term)

  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type to search"
        value={this.state.term}
        onChange={this.onSearchChange} 
      />
    );
  }
}
