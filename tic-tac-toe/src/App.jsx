import { useState } from 'react'
import { TURNS } from './constants'
import { checkWinner, checkGame } from './logic/board'
import { Result } from './components/result'
import { GameBoard } from './components/gameBoard'
import { saveGame, clearBoard, saveScore } from './logic/storage'
import  restart  from './assets/restaart.svg'
import  logo  from './assets/Logo.png'
import  tictactoe  from './assets/background-logo.png'
import './App.css'


function App() {
  const [board, setBoard] = useState (()=>{
    const boardSaved = window.localStorage.getItem('board')
      return  boardSaved ? JSON.parse(boardSaved) : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(()=>{
    const turnSaved = window.localStorage.getItem('turn')
      return  turnSaved ? JSON.parse(turnSaved) : TURNS.X
  })

  const [scores, setScores] = useState( () => {
    const scoreSaved = window.localStorage.getItem('score');
    return  scoreSaved ? JSON.parse(scoreSaved) : {  playerX: 0, playerO: 0, ties: 0}
  });

  const incrementScore = (player) => {
    const addPointsTo = player === false ? 'ties' : player === TURNS.X ?  'playerX': 'playerO'
    setScores((prevScores) => ({
      ...prevScores,
      [addPointsTo]: prevScores[addPointsTo] + 1,
    }));
    saveScore(scores);
  };

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
      incrementScore(win)
    }
    else if (checkGame(newBoard)){
      setWinner(false)
      incrementScore(false)
    }
  }

  const playAgain = () => {
    setTurn(TURNS.X)
    setWinner(null)
    setBoard(Array(9).fill(null))

    clearBoard(winner)
  }


  return (
    <>
      <main className='board'>
        <img className='game-logo' src={logo}></img>
        <Result winner={winner}  turn={turn} scores={scores}/>
        <GameBoard board={board} updateBoard={updateBoard}/>
        <button className="restart-button" onClick={playAgain}><img src={restart} alt="Logo" /> Play again</button>
      </main>
      <img className='fixed-image' src={tictactoe}></img>
    </>
  )
}

export default App
