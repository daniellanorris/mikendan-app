import React, { useState } from 'react';
import styles from '../styles/card.module.css';
import money from '../images/money.png';
import heart from '../images/heart.png';
import tear from '../images/tear.png';

export default function Card() {
  const images = [heart, tear, money];

  const [clickedCardIndex, setClickedCardIndex] = useState(null);

  function clickedCard(index) {
    setClickedCardIndex(index);
    setTimeout(() => {
      setClickedCardIndex(null);
    }, 500);
  }

  return (
    <div>
      {images.map((image, index) => (
        <div
          className={`${styles.card} ${clickedCardIndex === index ? styles.clicked : styles.notClicked}`}
          onClick={() => clickedCard(index)}
          key={index + 1}
        >
          <img width="100%" src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}