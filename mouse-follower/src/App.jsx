import { useEffect, useState } from 'react' 
import happyFace from './assets/hf.jpg'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [positionToFollow, setPositionToFollow] = useState({x: 0, y:0})

  useEffect(()=>{
    console.log('efecto', enabled)
  
    const handleMove = (event) =>{
      const {clientX, clientY} = event
      setPositionToFollow({x:clientX, y: clientY})
      console.log('handleMove', {clientX, clientY})
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
    
    return()=>{
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div  className='circle'style={{ transform: `translate(${positionToFollow.x}px , ${positionToFollow.y}px )`}}>
        <img src={happyFace} alt="happy face" className='follow-image'/>
      </div>
      <button onClick = { () => setEnabled(!enabled)}> {enabled ? 'Stop follow' : 'Follow me'}</button>
    </>
  )
}

export default App
