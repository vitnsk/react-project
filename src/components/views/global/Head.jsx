import React from 'react';
import { Link } from 'react-router-dom';
import css from '../../../styles/styles.css';


const {HeaderContainer, HeaderCSS} = css;

const buttonCSS={
display: 'block',
padding: '10px 14px 12px',
borderRadius: '6px',
backgroundColor: '#80F345',
cursor: 'pointer',
marginLeft: '10px'
}

const Head =(props)=>{

const {action} = props

return(
    <>
    <HeaderContainer>

<HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
<HeaderCSS.MenuContainer>
    <button onClick={()=>false && action('main')} style={buttonCSS}><Link style={{color:'inherit', textDecoration: 'none'}} to={'/main'}>Главная</Link></button>
    <button onClick={()=>false && action('stat')} style={buttonCSS}><Link style={{color:'inherit', textDecoration: 'none'}} to={'/stat'}>Статистика</Link></button>
    <button onClick={()=>false && action('plan')}style={buttonCSS}><Link style={{color:'inherit', textDecoration: 'none'}} to={'/plan'}>Планирование</Link></button>
</HeaderCSS.MenuContainer>

    </HeaderContainer>
    </>
);

}
export default Head;