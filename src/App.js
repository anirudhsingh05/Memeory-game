import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/apple.png", matched: false },
  { src: "/img/green.png", matched: false },
  { src: "/img/lemon.png", matched: false },
  { src: "/img/melon.png", matched: false },
  { src: "/img/pine.png", matched: false },
  { src: "/img/strawberry.png", matched: false },
];

function App() {
  const [card, setCard] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffle = () => {
    const shuffleCard = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCard(shuffleCard);
  };

  const handleChoice = (cards) => {
    choiceOne ? setChoiceTwo(cards) : setChoiceOne(cards);
  };

  // comparing cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCard((prevCard) => {
          return prevCard.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetChoice();
      } else {
        setTimeout(() => {
          resetChoice();
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset Choce

  const resetChoice = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  useEffect(() => {
    shuffle();
  }, []);

  return (
    <div>
      <img className="fixed -z-10" src="/img/Background.png" alt="background" />
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl font-bold m-4">Memory Game</h1>

        <div className="grid grid-cols-6 mt-10 ">
          {card.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
      <button
        className="border-2 font-bold hover:bg-green-400 p-4 mt-10"
        onClick={shuffle}
      >
        New Game
      </button>
    </div>
  );
}

export default App;
