import "./NFTPreviewCard.css";
import equImage from "/src/assets/images/image-equilibrium.jpg";
import equIcon from "/src/assets/images/icon-ethereum.svg";
import profileImage from "/src/assets/images/image-avatar.png";
import clockIcon from "/src/assets/images/icon-clock.svg";


// type Card = {
//     id: number;
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

const NFTPreviewCard = (card: Card) => {

    const id = card.id;
    const coinImage = card.coinImage;
    const coinName = card.coinName;
    const cardTitle = card.cardTitle;
    const cardDescription = card.cardDescription;
    const coinIcon = card.coinIcon;
    const coinTicker = card.coinTicker;
    const coinValue = card.coinValue;
    const tokenTimeLeft = card.tokenTimeLeft;
    const avatarImage = card.avatarImage;
    const creatorName = card.creatorName;

    // const coinImage = equImage;
    // const coinName = "Equilibrium";
    // const cardTitle = "Equilibrium #3429";
    // const cardDescription =
    //     "Our Equlibrium collection promotes balance and calm.";
    // const coinIcon = equIcon;
    // const coinValue = 0.041;
    // const coinTicker = "ETH";
    // const tokenTimeLeft: number = 3;
    // const avatarImage = profileImage;
    // const creatorName = "Jules Wyvern";



    return (
        <div className="nft-preview-card">
            <div className="nft-preview-card-image">
                <a href="#" target="_blank">
                <img src={coinImage} alt={coinName} className="base-image" />
                <img src="/src/assets/images/icon-view.svg" alt={coinName} className="hover-image" />
                </a>

            </div>
            <div className="nft-preview-title"><p><a href="#" target="_blank">{cardTitle}</a></p></div>
            <div className="nft-preview-card-description"><p>{cardDescription}</p></div>
            <div className="ntf-preview-card-attributes">
                <div className="ntf-preview-card-coin color-cyan">
                    <img src={coinIcon} alt={coinName} /><p>{coinValue} {coinTicker}</p>

                    
                </div>

                
                <div className="nft-preview-card-time-left">
                        <img src={clockIcon} alt="clock" />
                    
                    <p>{tokenTimeLeft} {tokenTimeLeft === 1 ? "day" : "days"} left</p>
                </div>
                
            </div>
            
            
                <hr />
            
            <div className="nft-preview-card-profile">
                
                    <img src={avatarImage} alt={creatorName} />
                
                
                    <p>Creation of <a href="#" target="_blank"><span className="creator">{creatorName}</span></a></p>
                
            </div>
        </div>
    );
};

export default NFTPreviewCard;
