import React from "react";
import Tile from "./Tile";

function Row({id, guesses, currentGuess, correctWord}) {

    const tiles = Array.from({ length: 5 }, (_, i) => <Tile key={i} id={id} i={i} guesses={guesses} correctWord={correctWord} currentGuess={currentGuess} />)

    return (
        <div className={"row"}>
            {tiles}
        </div>
    )
}
export default Row;
