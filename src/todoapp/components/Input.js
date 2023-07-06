import { forwardRef, useImperativeHandle, useRef } from "react";

function Input(props, ref){
    const inputRef=useRef();

    useImperativeHandle ( ref, ()=> ({
        focus: () => {
            inputRef.current.focus();
        }
    }))
    return (
        <input
            {...props} 
            ref={inputRef}
            className="input"
        />
    )
}

export default forwardRef(Input);