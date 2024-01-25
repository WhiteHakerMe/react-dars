import React from "react";
import img from '../assets/react.svg'
import './index.css'

const Card = ({ userId, id, title }) => {
  return (
    <div className="cards w-56 overflow-hidden bg-gray-100 bg-gradient-to-t pb-4">
      <div className="img w-54 h-44 flex justify-center mb-5 bg-slate-600" ><img src={img} alt="" /></div>
      <h2 className="id text-blue-800 text-2xl"><span className=" text-black">YOU CARD ID:</span> {userId}</h2>
      <h2 className="card-id text-blue-500 text-5lg mt-2 mb-2"><span>CARD ID:</span> {id}</h2>
      <h2 className="card-title"><span>CARD TITLE:</span> {title}</h2>
    </div>
  );
}

export default Card;
