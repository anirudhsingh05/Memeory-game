import { Link } from "react-router-dom";

const IntroTwo = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="w-1/2 max-w-lg mt-80 ml-80"
        src="/img/Monkey.png"
        alt="monkey"
      />
      <img
        className="w-5/6 max-w-md z-10 -mt-60 -ml-[200px]"
        src="/img/Head.png"
        alt="Heading"
      />
      <img
        className="w-3/4 max-w-sm z-30 -mt-[300px] -ml-[420px]"
        src="/img/text-2.png"
        alt="text-1"
      />
      <Link to="/home">
        <img
          className="transition-transform duration-300 hover:scale-110 mt-[650px] -ml-20"
          src="/img/Yes.png"
          alt="start-button"
        />
      </Link>
    </div>
  );
};

export default IntroTwo;
