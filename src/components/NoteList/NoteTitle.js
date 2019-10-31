import React from "react";

const NoteTitle = props => {
  const placeholder = "Note Title...";

  return (
    <input name="noteTitle"
            value = {props.noteTitle}
            onChange = {props.onChange}
            placeholder = {placeholder}
           autoComplete="off"
    />
  )
};

export default NoteTitle;
