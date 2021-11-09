import './game.css'
import { Container } from 'reactstrap'
import images from '../../images/images'
import Attack from '../Attack/Attack'

interface DataI {
  supertype: string
  types: []
  abilities: []
  hp: string
  attacks: []
  weaknesses: []
  resistances: []
  retreatCost: []
  subtypes: []
  rules: []
}

const Game = ({ data }: { data: DataI }) => {
  const returnType = (type: string) => {
    let imageToReturn
    images.forEach(image => {
      if (image.name === type) {
        imageToReturn = image.image
      }
    })
    return imageToReturn
  }
  return (
    <div>
      <Container className="p-4">
        {data.supertype === 'Pokémon' && (
          <div className="game-header">
            <h2>
              HP: <span>{data.hp}</span>
            </h2>
            <div className="types-container">
              <h2>Type(s): </h2>
              {data.types && data.types.map((type: string, index: number) => <img src={returnType(type)} alt={type} className="type-img" key={index} />)}
            </div>
          </div>
        )}
        {data.abilities &&
          data.abilities.map((ability: any, index: number) => (
            <div className="abiliy-container" key={index}>
              <h4>
                {ability.type} | {ability.name}
              </h4>
              <p>{ability.text}</p>
            </div>
          ))}
        {data.attacks && data.attacks.map((attack: any, index: number) => <Attack attack={attack} key={index} returnType={returnType} />)}
        {data.weaknesses && (
          <div className="weakness-container">
            <h4>Weaknesses: </h4>{' '}
            {data.weaknesses.map((weakness: any, index: number) => (
              <div className="weakness" key={index}>
                <img src={returnType(weakness.type)} alt={weakness.type} className="type-img"></img>
                <h4 className="weakness-value">{weakness.value}</h4>
              </div>
            ))}
          </div>
        )}
        {data.resistances && (
          <div className="resistance-container">
            <h4>Resistances: </h4>
            {data.resistances.map((resistance: any, index: number) => (
              <div className="resistance" key={index}>
                <img src={returnType(resistance.type)} alt={resistance.type} className="type-img" />
                <h4 className="resistance-value">{resistance.value}</h4>
              </div>
            ))}
          </div>
        )}
        {data.retreatCost && (
          <div className="retreat">
            <h4>Retreat Cost: </h4>
            {data.retreatCost.map((cost: any, index: number) => (
              <img src={returnType(cost)} alt={cost} key={index} className="type-img" />
            ))}
          </div>
        )}
        {data.supertype === 'Trainer' && (
          <div className="trainer-container">
            <h2>
              Subtypes:{' '}
              {data.subtypes.map((subtype: string, index: number) => (
                <span key={index}>{subtype} </span>
              ))}
            </h2>
            <h2>Rules</h2>
            {data.rules.map((rule: string, index: number) => (
              <h2>
                {index + 1}: <span className="rule">{rule}</span>
              </h2>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}

export default Game
