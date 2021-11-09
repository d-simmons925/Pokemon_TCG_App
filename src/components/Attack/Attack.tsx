import './attack.css'

interface AttackI {
  name: string
  cost: []
  damage: string
  text: string
}

const Attack = ({ attack, returnType }: { attack: AttackI; returnType: Function }) => {
  return (
    <div className="attack">
      <div className="attack-title">
        <h4>{attack.name}</h4>
        <div className="cost-container">
          {attack.cost.map((type: string, index: number) => (
            <img src={returnType(type)} alt={type} className="cost-image" key={index} />
          ))}
        </div>
        <h3 className="damage">{attack.damage}</h3>
      </div>
      <p>{attack.text}</p>
    </div>
  )
}

export default Attack
