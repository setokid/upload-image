import React from "react";
import "./style.css";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <p className="title">Page này dùng để tế thằng loz này</p>
        <img
          src="https://i.imgur.com/xHAWHTB.jpg"
          alt="pokemon"
          className="detail-img"
        />
      </div>
    </>
  );
};

export default Home;
