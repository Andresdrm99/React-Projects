import { Square } from "./square.jsx"
export function Result ({winner, playAgain})
{
    if (winner === null) return null

    return(
        <section className='winner'>
            <div className='text'>
                <h2>
                    { winner === false ? 'Tie' : 'The winner is: '}
                </h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={playAgain}>Play again!</button>
                </footer>
            </div>            
        </section>
    )
}
 