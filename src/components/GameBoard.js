import React, { useState, useEffect } from "react";
import Card from "./Card";
import { shuffleCards } from "../utils/shuffleCards";
import "../styles/bootstrap.css";
import "../styles/gameboard.css";

const GameBoard = () => {
  // State to track the cards, flipped cards, matched cards, and the number of moves
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    restartGame(); // Initialize game when component mounts
  }, []);

  const handleCardClick = (index) => {
    // Prevent clicking on already flipped or matched cards
    if (flippedIndexes.includes(index) || matched.includes(index)) return;
    setFlippedIndexes((prev) => [...prev, index]); // Add clicked card to flipped cards
    setMoves((prevMoves) => prevMoves + 1); // Increment move count

    // Logic to check for match when two cards are flipped
    if (flippedIndexes.length === 1) {
      const firstIndex = flippedIndexes[0];
      const secondIndex = index;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        setMatched((prev) => [...prev, firstIndex, secondIndex]); // Add to matched cards if IDs match
        setFlippedIndexes([]);
      } else {
        setTimeout(() => {
          setFlippedIndexes([]); // Reset flipped cards if no match
        }, 500);
      }
    }
  };

  const restartGame = () => {
    // Reset game state and shuffle cards
    setCards(shuffleCards());
    setFlippedIndexes([]);
    setMatched([]);
    setMoves(0);
  };

  const isGameWon = matched.length === cards.length && cards.length > 0; // Check if all cards are matched

  return (
    <div className="container mt-4">
      <div className="alert alert-secondary text-center">
        <strong>Game Rules:</strong> Match all the pairs to win. Click a card to
        reveal its image, after two are flipped that don't match they will be
        flipped back over and you can select two new cards.
      </div>
      <div className="game-board bg-light border rounded p-4 d-flex flex-column align-items-center">
        <div className="text-center mb-3">
          <h4>Moves: {moves}</h4> {/* Display number of moves */}
        </div>
        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <div
              className="col-6 col-md-3 mb-4 d-flex justify-content-center"
              key={index}
            >
              <Card
                id={card.id}
                imgPath={card.imgPath}
                isFlipped={
                  flippedIndexes.includes(index) || matched.includes(index)
                }
                onClick={() => handleCardClick(index)} // Handle card click
              />
            </div>
          ))}
        </div>
        {isGameWon && ( // Show win message if game is won
          <div className="alert alert-success text-center" role="alert">
            You Win! Do you want to restart?
          </div>
        )}
        <div className="mt-4">
          <button className="btn btn-info" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
