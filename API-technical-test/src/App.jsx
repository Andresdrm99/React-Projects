import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const FACT_ENDPOINT = 'https://catfact.ninja/fact'
const IMG_ENDPOINT = 'https://cataas.com/cat/says/'

function App() {
  const [fact, setFact] = useState( )
  const [imageURL, setImageURL] = useState()

  useEffect(()=>{
    fetch(FACT_ENDPOINT )
    .then(res => res.json())
    .then(data => {
      setFact(data.fact)
    }
  )
   
  }, [])

  useEffect(()=>{
    if(!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
    .then(response => {
      const url = response.url
      setImageURL(url)
    })
    console.log(fact, imageURL)
  },[fact])

  return (
    <>
      <main>
        <h1>Technical test</h1>
        <p>{fact}</p>
        { imageURL && <img src={`${imageURL}`} alt={`Image generate with the first word of the fact ${fact}`}></img>}
      </main>
    </>
  )
}

export default App
