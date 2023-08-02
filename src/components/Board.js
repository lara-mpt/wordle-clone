import React, {useEffect, useState} from "react";
import Row from "./Row";

function Board({correctWord}) {
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {

        if (guesses.length > 5) {
            setIsGameOver(true);
        }

        const handleType = (event) => {
            if (isGameOver) {
                return;
            }

            if (event.key === 'Backspace') {
                setCurrentGuess(currentGuess => currentGuess.slice(0, -1));
                return;
            }

            if (event.key === 'Enter' && currentGuess.length === 5) {
                if (currentGuess.length !== 5) {
                    return;
                }

                setGuesses([...guesses, currentGuess]);

                if (currentGuess === correctWord) {
                    setIsGameOver(true)
                }
                setCurrentGuess("");
                return;
            }

            if (currentGuess.length >= 5) {
                return;
            }

            setCurrentGuess(oldGuess => oldGuess + event.key);
        };

        window.addEventListener('keydown', handleType);

        return () => {
            window.removeEventListener('keydown', handleType);
        }

    }, [currentGuess, guesses, isGameOver, correctWord]);


    return (
        <div className={"board"}>
            {[0, 1, 2, 3, 4, 5].map(id => <Row key={id} id={id} guesses={guesses} currentGuess={currentGuess} correctWord={correctWord}/>)}
            {isGameOver && <p>The word is {correctWord}!</p>}
        </div>
    )
}
export default Board;

