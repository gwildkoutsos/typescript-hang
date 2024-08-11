import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import words from "./assets/wordlist.json";
import HangmanDrawing from "@/components/HangmanDrawing";
import HangmanWord from "@/components/HangmanWord";
import Keyboard from "@/components/Keyboard";

const inter = Inter({ subsets: ["latin"] });
const wordList: string[] = words;

export default function Home() {
  const [wordToGuess, setWordToGuess] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  useEffect(() => {
    setWordToGuess(words[Math.floor(Math.random() * wordList.length)]);
  }, []);

  return (
    <main className={`flex flex-col items-center gap-8 max-w-4xl `}>
      <div className=" text-4xl, align-center ">Lose win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div className=" self-stretch ">
        <Keyboard />
      </div>
      <h1>{wordToGuess}</h1>
    </main>
  );
}
