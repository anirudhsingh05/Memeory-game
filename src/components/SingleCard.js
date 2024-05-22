const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="">
      <div className="flex sm:flex-wrap">
        <img className="m-2 p-2 w-48" src={card.src} alt="images" />
        <img
          className={
            flipped
              ? "hidden m-2 p-2 w-48"
              : "absolute m-2 p-2 w-48 hover:border-4 border-white"
          }
          src="/img/cover.png"
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
