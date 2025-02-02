import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'


function useCatImage({fact}){
  const [imageURL, setImageURL] = useState()

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
}


function App() {
  const [fact, setFact] = useState()
  const imageURL = useCatImage({fact})
  
  useEffect(()=>{
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const generateFact = async ()=>{
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <>
      <main>
        <h1>Technical test</h1>
        <button onClick={generateFact}>Get new fact</button>
        <p>{fact}</p>
        { imageURL && <img src={`${imageURL}`} alt={`Image generate with the first word of the fact ${fact}`}></img>}
      </main>
    </>
  )
}

export default App
