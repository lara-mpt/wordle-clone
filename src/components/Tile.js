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

export default Tile;
