import React from "react"
const MyInput = (props:any) => {
    return (
      <label>
        {props.label}
        <input ref={props.ref} />
      </label>
    );
  };
export default MyInput;  