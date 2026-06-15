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
  // const [count, setCount] = useState(0)

  const [cards, setCards] = useState<Card[]>([
    {
        "id": 1,
        "coinImage": "/src/assets/images/image-equilibrium.jpg",
        "coinName": "Equilibrium",
        "cardTitle": "Equilibrium #3429",
        "cardDescription": "Our Equlibrium collection promotes balance and calm.",
        "coinIcon": "/src/assets/images/icon-ethereum.svg",
        "coinValue": 0.041,
        "coinTicker": "ETH",
        "tokenTimeLeft": 3,
        "avatarImage": "/src/assets/images/image-avatar.png",
        "creatorName": "Jules Wyvern"
    }
  ]);

  function outputCards() {
    return cards.map((card) => (
      <NFTPreviewCard
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
    ));
  }

  useEffect(
    () => {
      console.log("start - useEffect");

      fetch("http://localhost:8000/card")
        .then((response) => {
          return ((!response.ok)  ? response.json() : null)
        })
        .then((data) => {
          console.log(data);
          setCards(data);
        });
    },
    [] /** Only runs once after the first initial render. */,
  );

  return <div className="collection">{outputCards()}</div>;
}

export default App;
