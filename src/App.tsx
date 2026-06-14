import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import NFTPreviewCard from './components/NFTPreviewCard/NFTPreviewCard'

// type Card = {
//     coinImage: string;
//     coinName: string;
//     cardTitle: string;
//     cardDescription: string;
//     coinIcon: string;
//     coinTicker: string;
//     coinValue: number;
//     tokenTimeLeft: number;
//     avatarImage: string;
//     creatorName: string;
// }

// type Cards = {
//   card: Card[];
// }

interface Card {
  id: number;
  coinImage: string;
  coinName: string;
  cardTitle: string;
  cardDescription: string;
  coinIcon: string;
  coinTicker: string;
  coinValue: number;
  tokenTimeLeft: number;
  avatarImage: string;
  creatorName: string;
}

interface Cards {
  card: Card[];
}

function App() {
  // const [count, setCount] = useState(0)

  const [cards, setCards] = useState([]);

  function getCards() {
    return null;
  }

  useEffect(() => {
    console.log("start - useEffect");

    fetch('http://localhost:8000/cards')
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCards(data);
      });
  }, [] /** Only runs once after the first initial render. */);

  return (
    
    <div>
      {cards.map((card) => (
        <NFTPreviewCard card={card} />
      ))}
      

    </div>
  );
}



export default App;
