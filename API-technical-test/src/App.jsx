import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App() {
  const [fact,getNewRandomFact] = useCatFact()
  const imageURL = useCatImage({fact})

  const generateFact = async () => {
    getNewRandomFact()
  }

  return (
    <>
      <main>
        <h1>Technical test</h1>
        <button onClick={generateFact}>Get new fact</button>
        {fact && <p>{fact}</p>}
        { imageURL && <img src={`${imageURL}`} alt={`Image generate with the first word of the fact ${fact}`}></img>}
      </main>
    </>
  )
}

export default App
