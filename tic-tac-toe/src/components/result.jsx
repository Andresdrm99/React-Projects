import { TURNS } from "../constants.jsx"
export function Result ({winner, turn, scores})
{
    return(
        <section className="results" >      
            <h2 className="turnResult">
                { winner === null ? 'Turn of player ' + turn : winner === false ? 'It\'s a draw' : winner === TURNS.X ?  'Congratulations player X': 'Congratulations player O'}
            </h2>
            <div className="stats-container">
            <div className="stat">
                <div className="number">{scores.playerX}</div>
                <div className="label">Player {TURNS.X}</div>
            </div>
            <div className="divider"></div>
            <div className="stat">
                <div className="number">{scores.playerO}</div>
                <div className="label">Player {TURNS.O}</div>
            </div>
            <div className="divider"></div>
            <div className="stat">
                <div className="number">{scores.ties}</div>
                <div className="label">Draws</div>
            </div>
            </div>
        </section>
    )
}
 