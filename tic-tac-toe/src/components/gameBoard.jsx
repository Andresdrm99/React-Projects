import { Square } from "./square"
export const GameBoard = ({board, updateBoard}) =>{
    return(
        <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard} isSelected = {board[index] !== null}>
                {square}
              </Square>
            )
          })
        }
    </section>
    )
    
}
      