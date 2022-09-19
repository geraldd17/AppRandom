import React from 'react'
import Button from './Button'

export const QuoteBox = ({ randomQuotee, colorRandom, getAllRandom }) => {
  //console.log(randomQuotee)



  return (

    <article className='case'>
      <div className="cita">
        <i style={{ color: colorRandom }}  className="fa-solid fa-quote-left"></i>
        <p style={{ color: colorRandom }} className='case-quote'>{randomQuotee.quote}</p>
      </div>

      <h1 style={{ color: colorRandom }} className='case-author'>{randomQuotee.author}</h1>
      <Button
        getAllRandom={getAllRandom}
        colorRandom={colorRandom}

      />


    </article>
  )
}
export default QuoteBox


