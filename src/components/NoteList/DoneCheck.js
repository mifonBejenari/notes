import React from "react";

const DoneCheck = props => {
  // const { done } = props;

  return (
    <div>
      <label htmlFor = "done">Done</label>
      <input name = "done"
             type = "checkbox"
             checked = { props.done }
             id = "done" onChange={props.onChange}
      />
    </div>
  )
};

export default DoneCheck;