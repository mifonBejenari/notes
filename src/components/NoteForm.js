import React, {Component} from 'react';
import NewTextarea from './noteTextArea';
// import doneCheck from './noteDone.js';

export default class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteText: "",
      done: false,
      id: false,
      created: false,
      changed: false,
      maxLength: 200,
      noteLength: 0
    };
  }

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
    const {id , created, noteText, done } = this.state;

    const text = noteText.replace(/\s/g, '');

    if (text.length >= 1) {
      this.props.onSubmit({
        id,
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

        <NewTextarea {...state} onChange={this.handleChangedText} />
        {/*<doneCheck {...state} onChange={this.handlerDone}/>*/}

        <div>{state.noteLength} / {state.maxLength}</div>
        <div className="actions">
          <button className="save">Save</button>
        </div>
      </form>
    )
  }
}