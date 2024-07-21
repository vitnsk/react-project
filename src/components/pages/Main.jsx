import React from 'react';
import { changeViewType,changeComment,changeValue } from '../../redux-store/redusers/view-type-for-main';
import { useSelector,useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect } from 'react';
import Food from '../views/global/Food';
import InputComponent from '../comps/Input';

import css from '../../styles/form.css'



const { FormContainer, Button } = css;

// React.createElement(
//     'input',{placeholder: 'Введите сумму транзакции'}, null
// )
const Main =(props)=>{

const {action}=props

//const [value, setValue]=useState('')
//const [type, setType]=useState('доход')
//const [comment, setComment]=useState('')

const dispatch=useDispatch()
const viewType=useSelector(state=>state.viewTypeMain.viewType)
const viewValue=useSelector(state=>state.viewTypeMain.value)
const viewComment=useSelector(state=>state.viewTypeMain.comment)


const validation=()=>{
if(viewValue.length > 2 && viewType){
    console.log('Валидация прошла успешно')

const dataLine = `${viewValue}::${viewType}::${viewComment}`

// setData(
//     prev=>{
//         let newData=prev
//         newData.push(dataLine)
//         return newData
//     }
// )


action( dataLine )

    dispatch(changeValue(''))
   dispatch(changeViewType('доход'))
   dispatch(changeComment(''))
}
    else console.log('Ошибка валидации')


}
const handleChange = (event) => {
    dispatch(changeViewType(event.target.value));
  };

  const handleChangeValue = (param) => {
    dispatch(changeValue(param));
  };

  const handleChangeComment = (param) => {
    dispatch(changeComment(param));
  };

  const handleChangeCommentRadio = (event) => {
    dispatch(changeComment(event.target.value));
  };

  useEffect(()=>{console.log(viewType)}, [viewType])
return(
    <>
    
<FormContainer style={{alignItems: 'flex-start'}}>
   <InputComponent inputValue={viewValue} action={handleChangeValue} placeholder={"Введите сумму транзакции"} maxLength={"100"}/>
   <FormControl style={{marginTop:'9px',marginBottom: '12px'}}>
      <FormLabel id="demo-controlled-radio-buttons-group">Введите тип транзакции</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={viewType}
        onChange={handleChange}
        style={{marginTop:'5px',marginLeft: '6px'}}
      >
        <FormControlLabel value="расход" control={<Radio />} label="Расход" />
        <FormControlLabel value="доход" control={<Radio />} label="Доход" />
      </RadioGroup>
    </FormControl>

   {/* <InputComponent inputValue={type} action={setType}  placeholder={"Введите тип транзакции"}/> */}
  {viewType==='доход' && <InputComponent inputValue={viewComment} action={handleChangeComment} placeholder={"Введите комментарий"}/>}
  {viewType==='расход' && <FormControl style={{marginTop:'0px',marginBottom: '14px'}}>
      <FormLabel id="demo-controlled-radio-buttons-group">Введите тип расходов</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={viewComment}
        onChange={handleChangeCommentRadio}
        style={{marginTop:'5px',marginLeft: '6px'}}
      >
        <FormControlLabel value="покупка продуктов" control={<Radio />} label="Покупка продуктов" />
        <FormControlLabel value="оплата счетов" control={<Radio />} label="Олата счетов" />
        <FormControlLabel value="покупка одежды" control={<Radio />} label="Покупка одежды" />
        <FormControlLabel value="расходы на транспорт" control={<Radio />} label="Расходы на транспорт" />
        <FormControlLabel value="развлечения" control={<Radio />} label="Развлечения" />
        <FormControlLabel value="путешествия" control={<Radio />} label="Путешествия" />
      </RadioGroup>
    </FormControl>}


   <Button
   backgroundColor={
    viewValue.length < 3 ?
    "rgb(229, 229, 229)" :
     viewType.length < 3 ?
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