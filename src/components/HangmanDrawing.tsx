const HEAD = (
  <div className="w-[50px] h-[50px] rounded-full border-[10px] border-solid border-black absolute top-[50px] -right-[20px] "></div>
);
const BODY = (
  <div className="w-[10px] h-[100px] bg-black absolute top-[100px] right-0 "></div>
);
const RIGHT_HAND = (
  <div className="w-[80px] h-[10px] bg-black absolute top-[120px] -right-[80px] -rotate-[30deg] origin-bottom-left"></div>
);
const LEFT_HAND = (
  <div className="w-[80px] h-[10px] bg-black absolute top-[120px] right-[10px] rotate-[30deg] origin-bottom-right"></div>
);
const RIGHT_LEG = (
  <div className="w-[80px] h-[10px] bg-black absolute top-[190px] -right-[75px] rotate-[30deg] origin-bottom-left"></div>
);
const LEFT_LEG = (
  <div className="w-[80px] h-[10px] bg-black absolute top-[190px] right-[10px] -rotate-[30deg] origin-top-right"></div>
);
const BODY_PARTS = [HEAD, BODY, RIGHT_HAND, LEFT_HAND, RIGHT_LEG, LEFT_LEG];
type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className=" h-[50px] w-[10px] bg-black top-0 right-0 absolute"></div>
      <div className=" h-[10px] w-[200px] bg-black ml-[120px]"></div>
      <div className="h-[400px] w-[10px] bg-black ml-[120px]"></div>
      <div className=" h-[10px] w-[250px] bg-black"></div>
    </div>
  );
};
export default HangmanDrawing;
