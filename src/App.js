import './App.css';
import React, { Component } from 'react';
import ListClubs from './components/ListClubs';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>English Championship</h2>
        <ListClubs />
      </div>
    )
  }
}