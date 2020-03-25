import React from 'react';
import './App.css';
import Person from './components/Person';
import Pets from './components/Pets';

class App extends React.Component {
  render() {
    return (
      <div>

      <Person name="Chi" />
      <Pets animals="Bobo"/>

      </div>
    );
  }
}


export default App;
