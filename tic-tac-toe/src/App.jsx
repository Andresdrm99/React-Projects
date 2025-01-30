import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const TURNS = { // turnos
  X: '❌',
  O: '⚪'
}

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({children, isSelected,isfilled, updateBoard, index}) => {
  console.log(children, index, isSelected, children === '❌' && isSelected)
  const handleClick = () => {
    updateBoard(index);
  }

  const selected = `square ${
  index === undefined 
    ? isSelected 
      ? 'is-selected' 
      : '' 
    : children === '❌' 
    ? 'equis' 
    : children === '⚪' 
    ? 'circle' 
    : ''
}`
  return (
    <div className= {selected} onClick={handleClick}>
      {children}
    </div>
  )
}




function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) =>{
    for(const combination of WINNER_COMBOS){
      const [a, b, c] = combination
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (index) =>{
    if(board[index] !== null || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard);
    
    const win = checkWinner(newBoard);
    if(win){
      setWinner((win) => {
        return win
      })
    }
    else{
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
    }
  }

  return (
    <>
      <main className='board'>
        <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard} isSelected = {board[index] !== null}>
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
