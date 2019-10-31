import React, {Component} from 'react';
import './App.css';
// import NoteForm from './components/NoteForm.js';
// import NotesList from "./components/NoteList/NotesList";
import Curs from "./components/Curs/Curs";

class App extends Component {

  render() {
    return (
      <>
        <Curs />
        {/* <NotesList /> */}
      </>
    );
  }
}

export default App;
