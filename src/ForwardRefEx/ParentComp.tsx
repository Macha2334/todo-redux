import { useRef } from "react";
import MyInput from "./MyInput";
const ParentComponent = () => {
    const inputRef = useRef(null);
  

    const focusInput = () => {
      // Use the ref to focus the input element
      if (inputRef.current) {
       console.log('do the manipulation');
      }
    };
  
    return (
      <div>
        <MyInput ref={inputRef} placeholder="Type something..." />
        <button onClick={focusInput}>Focus the input</button>
      </div>
    );
  };
  export default ParentComponent;