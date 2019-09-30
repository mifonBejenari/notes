import React from "react";

const doneCheck = props => {
  const { done } = props;

  return (
    <div>
      <label htmlFor = "done">Done</label>
      <input name = "done"
             type = "checkbox"
             checked = {done}
             id = "done" onChange={this.handlerDone}
      />
    </div>
  )
};

export default doneCheck;