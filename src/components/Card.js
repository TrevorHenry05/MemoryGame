import React from "react";
import styles from "../styles/cardstyles.css";
import "../styles/bootstrap.css";
import cardback from "../images/cardback.jpg";

const Card = ({ id, imgPath, isFlipped, onClick }) => {
  // Function to handle click events on the card
  const handleClick = () => {
    onClick(id);
  };

  return (
    // Conditionally render the card face or back based on isFlipped prop
    <div className={`${styles.card} card`} onClick={handleClick}>
      {isFlipped ? (
        // If the card is flipped, show the card front with the image from imgPath
        <div className={`${styles.front}`}>
          <img src={imgPath} className="card-img-top" alt={`Card ${id}`} />
        </div>
      ) : (
        // If the card is not flipped, show the card back
        <div className={`${styles.back}`}>
          <img src={cardback} className="card-img-top" alt="Card back" />
        </div>
      )}
    </div>
  );
};

export default Card;
