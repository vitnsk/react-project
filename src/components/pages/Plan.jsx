import React, {useEffect} from 'react';
import{useParams, useSearchParams} from 'react-router-dom';

const Plan =()=>{
const {demoParam}= useParams()
const [params,setParams]=useSearchParams();

useEffect(()=>{
    console.log(demoParam)
    setParams({ userName: 'Nik', userAge: '29'})
},[demoParam, setParams]
)

return(
    <>

    <span style={{display: 'block', marginTop: '100px', marginLeft: '100px'}}>имя пользователя-{params.get('userName')}</span>
    <span style={{display: 'block', marginTop: '100px', marginLeft: '100px'}}>имя пользователя-{params.get('userAge')}</span>
    </>
);

}
export default Plan;