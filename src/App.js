import React, {Component} from 'react';
import './App.css';
// import NoteForm from './components/NoteForm.js';
import NotesList from "./components/NotesList";

class App extends Component {

  render() {
    return (
      <NotesList />
    );
  }
}

export default App;
