import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="header">Page này dùng để tế thằng loz này</div>
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
