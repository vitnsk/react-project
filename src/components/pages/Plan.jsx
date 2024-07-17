import React, {useState,useEffect} from 'react';


const Plan =()=>{
const [time, setTime]=useState()

useEffect(()=>{
setInterval(()=> setTime(new Date().toLocaleString()),1000)
},[])

return(
    <>

    <span style={{display: 'block', marginTop: '100px', marginLeft: '100px'}}>страница планирования</span>
    <span style={{display: 'block', marginTop: '100px', marginLeft: '100px'}}>текущее время -{time}</span>
    </>
);

}
export default Plan;