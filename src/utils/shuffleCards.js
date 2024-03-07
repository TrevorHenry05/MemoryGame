import apple from "../images/apple.jpg";
import blueberry from "../images/blueberry.jpg";
import lemon from "../images/lemon.jpg";
import orange from "../images/orange.jpg";
import pear from "../images/pear.jpg";
import pineapple from "../images/pineapple.png";
import strawberry from "../images/strawberry.jpg";
import raspberry from "../images/raspberry.png";

const CARDS = [
  { id: "apple", imgPath: apple },
  { id: "apple", imgPath: apple },
  { id: "blueberry", imgPath: blueberry },
  { id: "blueberry", imgPath: blueberry },
  { id: "lemon", imgPath: lemon },
  { id: "lemon", imgPath: lemon },
  { id: "orange", imgPath: orange },
  { id: "orange", imgPath: orange },
  { id: "pear", imgPath: pear },
  { id: "pear", imgPath: pear },
  { id: "pineapple", imgPath: pineapple },
  { id: "pineapple", imgPath: pineapple },
  { id: "strawberry", imgPath: strawberry },
  { id: "strawberry", imgPath: strawberry },
  { id: "raspberry", imgPath: raspberry },
  { id: "raspberry", imgPath: raspberry },
];

export const shuffleCards = () => {
  let cards = CARDS.slice();
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};
