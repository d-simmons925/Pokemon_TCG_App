const Card = ({cardInfo, color}) => {
  return (
    <div style={{marginBottom: "20px", backgroundImage: color}}>
      <div className="card-container">
        <img src={cardInfo.images.small} alt={cardInfo.name}/>
        <div className="info-container">
          <h1>{cardInfo.name}</h1>
          <hr />
          <h5>artist: {cardInfo.artist}</h5>
          <h5>set: {cardInfo.set.name}</h5>
          {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.normal ? 
            <h5>normal: ${cardInfo.tcgplayer.prices.normal.mid}</h5>
            : ''}
          {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.holofoil ? 
            <h5>holofoil: ${cardInfo.tcgplayer.prices.holofoil.mid}</h5>
            : ''}
          {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.reverseHolofoil ? 
            <h5>reverse holofoil price: ${cardInfo.tcgplayer.prices.reverseHolofoil.mid}</h5>
            : ''}
        </div>
      </div>
    </div>
  )
}

export default Card
