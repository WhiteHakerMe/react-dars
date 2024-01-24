import React from "react";
import img from '../assets/react.svg'
import './index.css'

const Card = ({userId, id, title}) => {
  return (
    <div className="card-catalog w-56 overflow-hidden ">
      <div className="cards ">
        <div className="img "><img src={img} alt="" /></div>
        <h2>{userId}</h2>
        <h2>{id}</h2>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
