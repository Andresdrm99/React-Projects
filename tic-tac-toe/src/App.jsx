import { useState } from 'react'
import { Square } from './components/square'
import { TURNS } from './constants'
import { checkWinner, checkGame } from './logic/board'
import { Result } from './components/result'
import { GameBoard } from './components/gameBoard'
import { saveGame, clearBoard } from './logic/storage'
import './App.css'


function App() {
  const [board, setBoard] = useState (()=>{
    const boardSaved = window.localStorage.getItem('board')
    console.log(boardSaved);
      return  boardSaved ? JSON.parse(boardSaved) : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(()=>{
    const turnSaved = window.localStorage.getItem('turn')
      return  turnSaved ? JSON.parse(turnSaved) : TURNS.X
  })

  const [winner, setWinner] = useState(null)

 
  const updateBoard = (index) =>{
    if(board[index] !== null || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    
    saveGame({board:newBoard,turn:newTurn})
   
    const win = checkWinner(newBoard);
    if(win){
      setWinner(win)
    }
    else if (checkGame(newBoard)){
      setWinner(false)
    }
  }

  const playAgain = () => {
    setTurn(winner !== null ? winner : TURNS.X )
    setWinner(null)
    setBoard(Array(9).fill(null))

    clearBoard(winner)
  }


  return (
    <>
      <main className='board'>
        <button onClick={playAgain}>Restart</button>
        <GameBoard board={board} updateBoard={updateBoard}/>
        <section className='turn'>
          <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
        </section>
      </main>
      
      <Result winner={winner}  playAgain={playAgain} />
    </>
  )
}

export default App
