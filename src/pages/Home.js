import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
import { useNavigate } from "react-router-dom";

const cardImages = [
  { src: "/img/apple.png", matched: false },
  { src: "/img/green.png", matched: false },
  { src: "/img/lemon.png", matched: false },
  { src: "/img/melon.png", matched: false },
  { src: "/img/pine.png", matched: false },
  { src: "/img/strawberry.png", matched: false },
];

const Home = () => {
  const [card, setCard] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    // Check if all cards are matched
    if (card.length && card.every((card) => card.matched)) {
      navigate("/winning");
    }
  }, [card, navigate]);

  return (
    <div>
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
};

export default Home;
