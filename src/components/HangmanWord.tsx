import cn from "classnames";
type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};
const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
  return (
    <div className="flex gap-3 text-8xl font-bold uppercase text-black">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-8 border-black ">
          <span
            className={cn("text-red-500", {
              "opacity-2": !guessedLetters.includes(letter),
            })}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
export default HangmanWord;
