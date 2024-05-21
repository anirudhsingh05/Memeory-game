const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col justify-center">
        <img className="" src={card.src} alt="images" />
        <img
          className={flipped ? "hidden" : "absolute"}
          src="/img/cover.png"
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
