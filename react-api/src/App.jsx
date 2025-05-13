import { useState, useEffect } from 'react'
import axios from 'axios'
const actorEndPoint = 'https://lanciweb.github.io/demo/api/actors/'
const actressEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'

function App() {

  //CONST Attori
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

  //Attori Array
  const fetchActors = () => {
    axios.get(actorEndPoint).then((response) => {
      setActors(response.data)
    })
  }

  //Attrici Array
  const fetchActresses = () => {
    axios.get(actressEndpoint).then((response) => {
      setActresses(response.data)
    })
  }

  useEffect(() => {
    fetchActors()
    fetchActresses()
  }, [])

  return (
    <>
      <h1>Hello Boolean!</h1>
    </>
  )
}

export default App
