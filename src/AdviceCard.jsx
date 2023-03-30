import React, { useState, useEffect } from "react";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";
import dice from "./assets/icon-dice.svg";
import Axios from "axios";

const AdviceCard = () => {
  const [advice, setAdvice] = useState("");
  const getAdvice = async () => {
    const res = await Axios.get("https://api.adviceslip.com/advice");
    const advice = await res.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="card">
      <p>Advice #{advice.id}</p>
      <h2>“{advice.advice}”</h2>
      <picture>
        <source media="(min-width: 768px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="divider" />
      </picture>
      <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
};

export default AdviceCard;
