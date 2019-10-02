import React, {Component} from 'react';
import NewTextarea from './NewTextarea.js';
import DoneCheck from './DoneCheck.js';
import NoteTitle from "./NoteTitle";

export default class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteTitle: "",
      noteText: "",
      done: false,
      id: false,
      created: false,
      changed: false,
      maxLength: 200,
      noteLength: 0
    };
  }

  handleChangedTitle = ({target}) => {
    const { value } = target;
    this.setState({
      [target.name]: value,
    })
  };

  handleChangedText = ({target}) => {
    const { value } = target;
    this.setState({
      [target.name]: value,
      noteLength: value.length,
    });
  };

  handlerDone = ({ target }) => {
    this.setState({
      done: target.checked
    });
  };

  setTime = () => {
    const d = new Date();
    return `${d.getDate()}.${(d.getMonth() + 1)}.${d.getFullYear()} / ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {id , created, noteTitle, noteText, done } = this.state;

    const text = noteText.replace(/\s/g, '');

    if (text.length >= 1) {
      this.props.onSubmit({
        id,
        noteTitle,
        noteText,
        done,
        created: created === false ? this.setTime() : created,
        changed: this.setTime(),
      });
    }

    this.setState({
      id: false,
      created: false,
      changed: false,
      noteTitle: "",
      noteText: "",
      done: false,
      noteLength: 0
    });
  };

  updateForm = (note) => {
    // const {id, created, changed, noteText, done} = note;
    this.setState({...note});
  };


  render() {
    const state = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <NoteTitle {...state} onChange={this.handleChangedTitle}/>
        {/*<input {...state} type="text"onChange={this.handleChangedTitle}/>*/}

        <NewTextarea {...state} onChange={this.handleChangedText} />
        <DoneCheck {...state} onChange={this.handlerDone}/>

        <div>{state.noteLength} / {state.maxLength}</div>
        <div className="actions">
          <button className="save">Save</button>
        </div>
      </form>
    )
  }
}