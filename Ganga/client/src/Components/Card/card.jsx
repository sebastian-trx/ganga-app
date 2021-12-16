import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

export default function Card({ image, name, price, id, reviews }) {
  
let productReviews = reviews?.filter(r=> r.product !== null);
let Reviews = productReviews?.filter((r) => r.product.name === name);
let reviewsLength = Reviews?.length;
let ReviewArr = Reviews?.map(r => r.qualificacion);
let Review = ReviewArr?.reduce((a, b) => a + b, 0);
let promedio = Review / reviewsLength;
let Promedio = Math.round(promedio)
let review = parseInt(Promedio)
console.log("REc", review)

if (review === 1) {
  review = "⭐";
} else if (review === 2) {
  review = "⭐⭐";
} else if (review === 3) {
  review = "⭐⭐⭐";
} else if (review === 4) {
  review = "⭐⭐⭐⭐";
} else if (review === 5) {
  review = "⭐⭐⭐⭐⭐";
} else if (review === 6) {
  review = "⭐⭐⭐⭐⭐⭐";
} else if (review === 7) {
  review = "⭐⭐⭐⭐⭐⭐⭐";
} else if (review === 8) {
  review = "⭐⭐⭐⭐⭐⭐⭐⭐";
} else if  (review === 9) {
  review = "⭐⭐⭐⭐⭐⭐⭐⭐⭐";
} else if  (review === 10) {
  review = "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐";
}

let reviewFalsa = Math.floor(Math.random() * 6) + 1;

if (reviewFalsa === 1) {
  reviewFalsa = "⭐";
} else if (reviewFalsa === 2) {
  reviewFalsa = "⭐⭐";
} else if (reviewFalsa === 3) {
  reviewFalsa = "⭐⭐⭐";
} else if (reviewFalsa === 4) {
  reviewFalsa = "⭐⭐⭐⭐";
} else if (reviewFalsa === 5) {
  reviewFalsa = "⭐⭐⭐⭐⭐";
} else if (reviewFalsa === 6) {
  reviewFalsa = "⭐⭐⭐⭐⭐⭐";
} else if (reviewFalsa === 7) {
  review = "⭐⭐⭐⭐⭐⭐⭐";
}

  return (
    <div className="containerCardAll">
      <Link to={`/${id}`}>
        <div className="containerImgCard">
          <img src={image} alt={`imagen de ${name}`} />
        </div>
        <div className="name">
          <strong>{name.toUpperCase()}</strong>
        </div>
        <div className="star">
          <p>{reviewsLength >= 1 ? review : reviewFalsa}</p>
        </div>
        <div className="conPrice">
          <h3>$ {price} pesos</h3>
        </div>
      </Link>
    </div>
  )};