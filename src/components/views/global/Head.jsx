import React from 'react';
//import {  useNavigate } from 'react-router-dom';
import css from '../../../styles/styles.css';

import HOCButton from '../../comps/HOCHeaderButton';
import Button from '../../comps/Button';

const HOCButtonComponent = HOCButton(Button)

const {HeaderContainer, HeaderCSS} = css;

// const buttonCSS={
// display: 'block',
// padding: '10px 14px 12px',
// borderRadius: '6px',
// backgroundColor: '#80F345',
// cursor: 'pointer',
// marginLeft: '10px'
// }

const Head = () =>{
// const navigate = useNavigate();
// const [inner,setInner]=useState(0)


return(
    <>
    <HeaderContainer>

<HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
<HeaderCSS.MenuContainer>
    {/* <HOCButtonComponent text={'/plan'} inner={inner} onClick={()=>setInner(prev=>prev+1)}></HOCButtonComponent>
    <button  onClick={()=>navigate('/main')} style={buttonCSS}>Главная</button>
    <button  onClick={()=>navigate('/stat/расход')} style={buttonCSS}>Статистика</button> */}
    <HOCButtonComponent
     text={'/main'} 
     onClick={() => console.log('переход по маршруту /main')}
     >Главная</HOCButtonComponent >
   <HOCButtonComponent
     text={'/stat/расход'} 
     onClick={() => console.log('переход по маршруту /stat/расход')}
     >Статистика</HOCButtonComponent >
   
    <HOCButtonComponent
     text={'/plan'}  
     onClick={() => console.log('переход по маршруту /plan')}
     >Планирование</HOCButtonComponent >
</HeaderCSS.MenuContainer>

    </HeaderContainer>
    </>
);

}
export default Head;