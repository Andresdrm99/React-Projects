import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()
  
  const getNewRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(getNewRandomFact, [])
  return [fact, getNewRandomFact]
}
