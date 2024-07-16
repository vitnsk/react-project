import React, {useEffect} from 'react';
import{useParams} from 'react-router-dom';

const Plan =()=>{
const {demoParam}= useParams()
useEffect(()=>{
    console.log(demoParam)
},[demoParam]
)

return(
    <>

    <span style={{display: 'block', marginTop: '100px', marginLeft: '100px'}}>страница планирования</span>
        
    </>
);

}
export default Plan;