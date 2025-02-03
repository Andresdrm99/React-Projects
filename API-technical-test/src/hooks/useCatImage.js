
import { useState, useEffect } from "react"

export function useCatImage({fact}){
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
  },[fact])

  return imageURL
}