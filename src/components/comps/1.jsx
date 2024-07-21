import React from 'react'
//import styles from "./styles.module.css"

const buttonCSS = {
  display: 'block',
  padding: '10px 14px 12px',
  borderRadius: '6px',
  backgroundColor: '#B0F347',
  cursor: 'pointer',
  marginLeft: '10px'
}


     const Button = (props) => {
  //const { children, onClick } = props
const {inner}=props
  return (

    <button style={buttonCSS}>{inner} 
    </button>

    // <button 
    //   className={styles.button}
    //   onClick={onClick}
    // >
    //   { children }
    // </button>
  )
}

export default Button