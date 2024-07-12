import React, {useState, useEffect} from 'react';


const Plan =()=>{
const [data, setData]= useState({name: 'nick', age: 29})
// const increment=()=>{
//     setCount(prev=>prev+1)
//     setCount(prev=>prev+1)
// }
const change = () =>{
    setData({...data, age: 30})
}

useEffect(() => {console.log(data.age)

}, [data.age])


return(
    <>
    {/* <span style={{display: 'block', marginTop: '100px', marginLeft: '100px'}}>{count}</span> 
       <button onClick={increment}>Прибавить</button>*/}
    <span style={{display: 'block', marginTop: '100px', marginLeft: '100px'}}>{data.name}</span>
    <span style={{display: 'block', marginTop: '100px', marginLeft: '100px'}}>{data.age}</span>
    <button onClick={change}>Изменить</button>
 
    </>
);

}
export default Plan;