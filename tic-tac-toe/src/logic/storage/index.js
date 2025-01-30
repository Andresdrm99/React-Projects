import { TURNS } from "../../constants"

export const saveGame = ({board, turn}) =>{
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn',  JSON.stringify(turn))
}

export const clearBoard = (winner) => {
    window.localStorage.setItem('board', JSON.stringify(Array(9).fill(null)))
    window.localStorage.setItem('turn',  JSON.stringify(winner !== null ? winner : TURNS.X ))
}

