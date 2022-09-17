import { useState } from 'react'
import './App.css'
import { QuoteBox } from './components/QuoteBox'
import quotess from './json/quotes.json'
import color from './utilis/color'

function App() {
  //console.log(quotess)


  const getDatosRandom = myArray => {
    return Math.floor(Math.random() * myArray.length)
  }

  const getFirstElement = quotess[getDatosRandom(quotess)]
  const getFirstColor = color[getDatosRandom(color)]

  const [randomQuotee, setRandomQuotee] = useState(getFirstElement)
  const [colorRandom, setColorRandom] = useState(getFirstColor)
  //console.log(getFirstElement)

  const getAllRandom = () => {
    setRandomQuotee(quotess[getDatosRandom(quotess)])
    setColorRandom(color[getDatosRandom(color)])

  }




    return (
      <div style={{ backgroundColor: colorRandom }} className="App">
        <QuoteBox
          randomQuotee={randomQuotee}
          colorRandom={colorRandom}
          getAllRandom={getAllRandom}

        />
      </div>
    )
  }

  export default App
