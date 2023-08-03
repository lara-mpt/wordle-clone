import React, {useEffect, useState} from "react";
import Row from "./Row";

function Board({correctWord, wordList}) {
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);

    function isAlphabetical(key) {
        return /^[a-zA-Z]$/.test(key);
    }

    useEffect(() => {
        if (guesses.length > 5) {
            setIsGameOver(true);
        }

        const handleType = (event) => {
            if (isGameOver) {
                return;
            }

            if (event.key === 'Backspace') {
                setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
            } else if (event.key === 'Enter') {
                if (currentGuess.length === 5 && wordList.includes(currentGuess) && !guesses.includes(currentGuess)) {
                    setGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
                    setCurrentGuess('');

                    if (currentGuess === correctWord || guesses.length >= 5) {
                        setIsGameOver(true);
                    }
                }
            } else if (currentGuess.length < 5 && isAlphabetical(event.key)) {
                setCurrentGuess((prevGuess) => prevGuess + event.key);
            }
        };

        window.addEventListener('keydown', handleType);

        return () => {
            window.removeEventListener('keydown', handleType);
        }

    }, [currentGuess, guesses, isGameOver, correctWord, wordList]);


    return (
        <div className={"board"}>
            {[0, 1, 2, 3, 4, 5].map(id => <Row key={id} id={id} guesses={guesses} currentGuess={currentGuess} correctWord={correctWord}/>)}
            {isGameOver && <p>The word is {correctWord}!</p>}
        </div>
    )
}
export default Board;

