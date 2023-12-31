import './App.css';
import {useEffect, useState} from "react";
import wordBank from "./word-bank.txt";
import Board from "./components/Board";

const getRandomWord = words => words[Math.floor(Math.random() * words.length)];

function App() {
    const [correctWord, setCorrectWord] = useState("");
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        const fetchWordSet = async () => {
            await fetch(wordBank)
                .then(res => res.text())
                .then(res => {
                    const wordArr = res.split("\n");
                    setWordList(wordArr);
                    setCorrectWord(getRandomWord(wordArr));
                });
        }
        fetchWordSet();
    }, []);

    return (
        <div>
            <h1>Wordle</h1>
            <Board correctWord={correctWord} wordList={wordList}/>
        </div>
    );
}

export default App;