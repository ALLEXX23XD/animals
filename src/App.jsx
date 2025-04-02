import { useState } from "react"
import './App.css'

import animalsShow from "./animalsShow"


function getRandomAnimal(){
  const animals= ['cat','bird', 'dog', 'cow', 'gator', 'horse']

  return animals[Math.floor(Math.random()* animals.length)]
}
function App() {

  const[animals, setAnimals]= useState([])
  
  const handleClick = ()=>{
    setAnimals([...animals,getRandomAnimal()])
  }

  const renderAnimals= animals.map((animal, index) =>{
    return <animalsShow type={animal} key={index}/>
  })


  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className="animals-list">
        {renderAnimals}
      </div>
    </div>
  )
}

export default App
