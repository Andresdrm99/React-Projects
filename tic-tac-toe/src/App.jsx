import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X:'X',
  O:'O'
}


const Square = ({children, isSelected, updateBoard, index}) => {
  const selected = `square ${isSelected ? 'is-selected': ''}`

  return (
    <div className= {selected}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  return (
    <>
      <main className='board'>
        <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index}>
                {board[index]}
              </Square>
            )
          })
        }
        </section>
        <section className='turn'>
          <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
        </section>
      </main>
    </>
  )
}

export default App
