import React from "react";

function Tile({ id, i, guesses, correctWord, currentGuess }) {
    let char;
    let className;

    if (id < guesses.length) {
        char = guesses[id][i];
        className = correctWord[i] === char ? "tile-green" : correctWord.includes(char) ? "tile-yellow" : "tile-grey";
    } else {
        char = id === guesses.length ? currentGuess[i] || '' : '';
        className = "tile";
    }

    return <div key={i} className={className}>{char.toUpperCase()}</div>;
}


function Row({id, guesses, currentGuess, correctWord}) {

    const tiles = Array.from({ length: 5 }, (_, i) => <Tile key={i} id={id} i={i} guesses={guesses} correctWord={correctWord} currentGuess={currentGuess} />)

    return (
        <div className={"row"}>
            {tiles}
        </div>
    )
}
export default Row;
