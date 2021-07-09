
const Card = ({cardInfo, color}) => {
  return (
    <div style={{marginBottom: "20px", backgroundImage: color}}>
      <div className="card-container">
        <img src={cardInfo.images.small} alt="pokemon card"/>
        <div className="info-container">
          <h1>{cardInfo.name}</h1>
          <h4>set: {cardInfo.set.name}</h4>
          {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.normal ? 
            <h4>normal: ${cardInfo.tcgplayer.prices.normal.market}</h4>
            : ''}
          {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.holofoil ? 
            <h4>holofoil: ${cardInfo.tcgplayer.prices.holofoil.market}</h4>
            : ''}
          {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.reverseHolofoil ? 
            <h4>reverse holofoil price: ${cardInfo.tcgplayer.prices.reverseHolofoil.market}</h4>
            : ''}
        </div>
      </div>
    </div>
  )
}

export default Card
