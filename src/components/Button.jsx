import React from 'react'


const Button = ({getAllRandom, colorRandom}) => {


    return (

        <button 
      style={{ backgroundColor: colorRandom }} 
      className='case-button' 
      onClick={getAllRandom}
      >&#62;
</button>

    )
}

export default Button