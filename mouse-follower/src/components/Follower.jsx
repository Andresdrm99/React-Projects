import happyFace from '../assets/hf.jpg'
import { useEffect, useState } from 'react' 


export const Follower = ()=>{
  const [enabled, setEnabled] = useState(false)
  const [positionToFollow, setPositionToFollow] = useState({x: 0, y:0})

  useEffect(()=>{
    const handleMove = (event) =>{
      const {clientX, clientY} = event
      setPositionToFollow({x:clientX, y: clientY})
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