import React from 'react';
import { useState } from 'react';

import Food from '../views/global/Food';
import InputComponent from '../comps/Input';

import css from '../../styles/form.css'



const { FormContainer, Button } = css;

// React.createElement(
//     'input',{placeholder: 'Введите сумму транзакции'}, null
// )
const Main =(props)=>{

const {action}=props

const [value, setValue]=useState('')
const [type, setType]=useState('')
const [comment, setComment]=useState('')



const validation=()=>{
if(value.length > 2 && type){
    console.log('Валидация прошла успешно')

const dataLine = `${value}::${type}::${comment}`

// setData(
//     prev=>{
//         let newData=prev
//         newData.push(dataLine)
//         return newData
//     }
// )


action(
    prev=>[ ...prev, dataLine]    
    )

    setValue('')
    setType('')
    setComment('')
}
    else console.log('Ошибка валидации')


}

return(
    <>
    
<FormContainer>
   <InputComponent inputValue={value} action={setValue} placeholder={"Введите сумму транзакции"} maxLength={"100"}/>
   <InputComponent inputValue={type} action={setType}  placeholder={"Введите тип транзакции"}/>
   <InputComponent inputValue={comment} action={setComment} placeholder={"Введите комментарий"}/>
   <Button
   backgroundColor={
    value.length < 3 ?
    "rgb(229, 229, 229)" :
     type.length < 3 ?
     "rgb(229, 229, 229)" :
    "rgb(176, 243, 71)" 
}
   onClick={validation}
   >Сохранить транзакцию</Button>
</FormContainer>

    <Food></Food>
    </>
);

}
export default Main;