import React,{useContext} from 'react';
import FooterContext from '../../../redux-store/context/footerContext'
import css from '../../../styles/styles.css';

const {FooterContainer}=css;


const Food = ({ children }) => {

    // eslint-disable-next-line no-unused-vars
    const [ footerText, setFooterText ] = useContext(FooterContext)
  
    return (
      <React.Fragment>
        <FooterContainer 
              onClick={() => setFooterText('Новый текст для подвала приложения')} 
              style={{ justifyContent: 'space-around', fontSize: '14px' }}
            >
              { footerText }
            </FooterContainer>
        {/* <FooterContainer style={{ justifyContent: 'space-around', fontSize: '14px' }}>{footerText}</FooterContainer> */}
        {/* <FooterContainer style={{ justifyContent: 'space-around', fontSize: '14px' }}>{children}</FooterContainer> */}
      </React.Fragment>
    )
  }
  
  
export default Food;