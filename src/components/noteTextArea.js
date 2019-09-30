import React from "react";

const NewTextarea = props => {
  const placeholder = "todo text...";
  return (
    <textarea name="noteText"
              value = {props.noteText}
              onChange = {props.onChange}
              maxLength = {props.maxLength}
              placeholder = {placeholder}
    />
  )
};

export default NewTextarea;
