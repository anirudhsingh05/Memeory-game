// Winning.js
import React from "react";
import { Link } from "react-router-dom";

const Winning = () => {
  return (
    <div className="flex flex-col items-center">
      <Link to="/home">
        <img src="/img/win.png" alt="winner" />
      </Link>
      <img
        className="-mt-[420px]"
        src="/img/Winning-Monkey.png"
        alt="Winning Monkey"
      />
    </div>
  );
};

export default Winning;
