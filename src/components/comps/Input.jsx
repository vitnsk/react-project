
import React  from 'react';
import { useState } from 'react';

import css from '../../styles/form.css'

const { Input } = css;

//const [ placeholder, setPlaceholder ] =useState

// const object={
//     one:20,
//     two: 30,
//     three:40
// }

// function example(object){
//     const{one,two, three}=object
// return one+two+three
// }


const InputComponent =(props)=>{

    const { placeholder, action, inputValue, maxLength } = props
    

    //const [inputValue, setInputValue]=useState(0)

return(
    <>
     <Input  

     value={inputValue}
    type={"text"}
    placeholder={placeholder}
    maxLength={maxLength}
    onChange={event=>{
       
        const newValue=event.target.value;
        //setInputValue(newValue)
        action(newValue)
    }}
    />
    {/* <span>{inputValue} руб.</span> */}
    </>
)

}
export default InputComponent;