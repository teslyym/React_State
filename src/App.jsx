import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Person ={ fullName:"Cristiano", bio:"Ultimate Footballer", imgSrc:"https://www.cristianoronaldo.com/assets/images/brand_fragrances.jpg?t=3103296480", profession:"Superhero"}
  const [show, setShow] = useState(true)
  function toggleShow() {
    setShow(!show)
  }

  return (
    <div className='body'>
    {
      show && 
      
        <div className='big-box'>
          <div>
        <h1>{Person.fullName}</h1>
        <h3>{Person.bio}</h3>
        <h3>{Person.profession}</h3>
        </div>
        <img src={Person.imgSrc} alt="" />
        </div>
     
    }
      <button onClick={toggleShow}>toggle show</button>
      </div>
  )
}

export default App
