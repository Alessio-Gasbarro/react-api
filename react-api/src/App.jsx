import { useState, useEffect } from 'react'
import axios from 'axios'
const actorEndPoint = 'https://lanciweb.github.io/demo/api/actors/'
import Cards from './components/Cards'

function App() {

  //CONST Attori
  const [actors, setActors] = useState([]);

  //Attori Array
  const fetchActors = () => {
    axios.get(actorEndPoint).then((response) => {
      setActors(response.data)
    })
  }

  useEffect(() => {
    fetchActors()
  }, [])

  return (
    <>
      <h1>ATTORI</h1>
      <div className='container'>
        <ul className='card-container'>
          {actors.map((actor) => (
            <Cards key={`actor-${actor.id}`} actor={actor} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
