import './market.css'
import { Container } from 'reactstrap'

const Market = ({ data }: { data: any }) => {
  return (
    <div>
      <Container className="p-4">
        <p>
          *prices based on data from{' '}
          <a href="https://www.tcgplayer.com/">https://www.tcgplayer.com/</a>
        </p>
        {data.tcgplayer && data.tcgplayer.prices['1stEditionNormal'] && (
          <div className="price-container">
            <h2>1st Edition Normal</h2>
            <h3>
              Estimated Market Value: $
              <span>{data.tcgplayer.prices['1stEditionNormal'].market}</span>
            </h3>
            <ul>
              <li>High: ${data.tcgplayer.prices['1stEditionNormal'].high}</li>
              <li>Mid: ${data.tcgplayer.prices['1stEditionNormal'].mid}</li>
              <li>Low: ${data.tcgplayer.prices['1stEditionNormal'].low}</li>
            </ul>
          </div>
        )}
        {data.tcgplayer && data.tcgplayer.prices['1stEditionHolofoil'] && (
          <div className="price-container">
            <h2>1st Edition Holo</h2>
            <h3>
              Estimated Market Value: $
              <span>{data.tcgplayer.prices['1stEditionHolofoil'].market}</span>
            </h3>
            <ul>
              <li>High: ${data.tcgplayer.prices['1stEditionHolofoil'].high}</li>
              <li>Mid: ${data.tcgplayer.prices['1stEditionHolofoil'].mid}</li>
              <li>Low: ${data.tcgplayer.prices['1stEditionHolofoil'].low}</li>
            </ul>
          </div>
        )}
        {data.tcgplayer && data.tcgplayer.prices.normal && (
          <div className="price-container">
            <h2>Normal</h2>
            <h3>
              Estimated Market Value:
              <span>${data.tcgplayer.prices.normal.market}</span>
            </h3>
            <ul>
              <li>High: ${data.tcgplayer.prices.normal.high}</li>
              <li>Mid: ${data.tcgplayer.prices.normal.mid}</li>
              <li>Low: ${data.tcgplayer.prices.normal.low}</li>
            </ul>
          </div>
        )}
        {data.tcgplayer && data.tcgplayer.prices.holofoil && (
          <div className="price-container">
            <h2>Holo</h2>
            <h3>
              Estimated Market Value:
              <span> ${data.tcgplayer.prices.holofoil.market}</span>
            </h3>
            <ul>
              <li>High: ${data.tcgplayer.prices.holofoil.high}</li>
              <li>Mid: ${data.tcgplayer.prices.holofoil.mid}</li>
              <li>Low: ${data.tcgplayer.prices.holofoil.low}</li>
            </ul>
          </div>
        )}
        {data.tcgplayer && data.tcgplayer.prices.reverseHolofoil && (
          <div className="price-container">
            <h2>Reverse Holo</h2>
            <h3>
              Estimated Market Value:
              <span> ${data.tcgplayer.prices.reverseHolofoil.market}</span>
            </h3>
            <ul>
              <li>High: ${data.tcgplayer.prices.reverseHolofoil.high}</li>
              <li>Mid: ${data.tcgplayer.prices.reverseHolofoil.mid}</li>
              <li>Low: ${data.tcgplayer.prices.reverseHolofoil.low}</li>
            </ul>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Market
