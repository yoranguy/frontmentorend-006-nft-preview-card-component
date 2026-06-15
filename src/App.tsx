import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import NFTPreviewCard from "./components/NFTPreviewCard/NFTPreviewCard";


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

function App() {

  const [cards, setCards] = useState<Card[]>([]);

  function outputCards() {

    return cards.map((card) => (
      <NFTPreviewCard
        key={card.id}
        id={card.id}
        coinImage={card.coinImage}
        coinName={card.coinName}
        cardTitle={card.cardTitle}
        cardDescription={card.cardDescription}
        coinIcon={card.coinIcon}
        coinTicker={card.coinTicker}
        coinValue={card.coinValue}
        tokenTimeLeft={card.tokenTimeLeft}
        avatarImage={card.avatarImage}
        creatorName={card.creatorName}
      />
    ))
  }

  function setStaticCards() {
    setCards(
      [{
        "id":1,
        "coinImage": "/images/image-equilibrium.jpg",
        "coinName": "Equilibrium",
        "cardTitle": "Equilibrium #3429",
        "cardDescription": "Our Equlibrium collection promotes balance and calm.",
        "coinIcon": "/images/icon-ethereum.svg",
        "coinValue": 0.041,
        "coinTicker": "ETH",
        "tokenTimeLeft": 3,
        "avatarImage": "/images/image-avatar.png",
        "creatorName": "Jules Wyvern"
      }]
    )
  }

  useEffect(
    () => {
      console.log("start - useEffect");

      fetch("http://localhost:8000/card")
        .then((response) => {
          return ((response.ok) ? response.json() : null)
        })
        .then((data) => {
          console.log(data);
          setCards(data);
        });
        // For when the json server isn't running
        if (cards.length < 1)
        {
          setStaticCards();
        }
    },
    [] /** Only runs once after the first initial render. */,
  );

  return (
    
  <div className="collection">{outputCards()}</div>

);
}

export default App;
