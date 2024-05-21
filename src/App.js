import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
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
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffle}>New Game</button>

      <div className="grid grid-cols-4 mt-20">
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
  );
}

export default App;
