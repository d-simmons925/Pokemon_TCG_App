const Card = ({cardInfo, color}) => {
  return (
    <div style={{marginBottom: "20px"}}>
      <div className="card-container" style={{backgroundImage: color}}>
        <img src={cardInfo.images.small} alt={cardInfo.name}/>
        <div className="info-container">
          <h1>{cardInfo.name}</h1>
          <h5>artist: {cardInfo.artist}</h5>
          <h5>set: {cardInfo.set.name}</h5>
          {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.normal ? 
            <h5>normal: ${cardInfo.tcgplayer.prices.normal.mid}</h5>
            : ''}
          {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.holofoil ? 
            <h5>holo: ${cardInfo.tcgplayer.prices.holofoil.mid}</h5>
            : ''}
          {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.reverseHolofoil ? 
            <h5>reverse holo: ${cardInfo.tcgplayer.prices.reverseHolofoil.mid}</h5>
            : ''}
        </div>
      </div>
    </div>
  )
}

export default Card
