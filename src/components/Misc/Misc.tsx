import './misc.css'
import { Container } from 'reactstrap'

interface DataI {
  artist: string
  set: {
    name: string
    series: string
  }
  evolvesFrom: string
}

const Misc = ({ data }: { data: DataI }) => {
  return (
    <div>
      <Container className="p-4">
        <div className="misc-container">
          <h2>
            Artist: <span>{data.artist}</span>
          </h2>
          <h2>
            Set: <span>{data.set.name}</span>
          </h2>
          <h2>
            Series: <span>{data.set.series}</span>
          </h2>
          {data.evolvesFrom && (
            <h2>
              Evolves From: <span>{data.evolvesFrom}</span>
            </h2>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Misc
