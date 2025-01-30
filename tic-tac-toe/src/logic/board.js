import { WINNER_COMBOS } from "../constants"

export  const checkWinner = (boardToCheck) =>{
    for(const combination of WINNER_COMBOS){
      const [a, b, c] = combination
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    return null
  }
 
export  const checkGame = (newBoard) => { 
    return newBoard.every((square) => square !== null)
}
