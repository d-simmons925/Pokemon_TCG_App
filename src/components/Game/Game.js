import "./game.css";
import { Container } from "reactstrap";
import images from "../../images/images";
import Attack from "../Attack/Attack";

const Game = ({ data }) => {
  const returnType = (type) => {
    let imageToReturn;
    images.forEach((image) => {
      if (image.name === type) {
        imageToReturn = image.image;
      }
    });
    return imageToReturn;
  };
  return (
    <div>
      <Container className="p-4">
        {data.supertype === "Pokémon" && (
          <div className="game-header">
            <h2>
              HP: <span>{data.hp}</span>
            </h2>
            <div className="types-container">
              <h2>Type(s): </h2>
              {data.types &&
                data.types.map((type, index) => (
                  <img
                    src={returnType(type)}
                    alt={data.types}
                    className="type-img"
                    key={index}
                  />
                ))}
            </div>
          </div>
        )}
        {data.abilities &&
          data.abilities.map((ability, index) => (
            <div className="abiliy-container" key={index}>
              <h4>
                {ability.type} | {ability.name}
              </h4>
              <p>{ability.text}</p>
            </div>
          ))}
        {data.attacks &&
          data.attacks.map((attack, index) => (
            <Attack attack={attack} key={index} returnType={returnType} />
          ))}
        {data.weaknesses && (
          <div className="weakness-container">
            <h4>Weaknesses: </h4>{" "}
            {data.weaknesses.map((weakness, index) => (
              <div className="weakness" key={index}>
                <img
                  src={returnType(weakness.type)}
                  alt={weakness.type}
                  className="type-img"
                ></img>
                <h4 className="weakness-value">{weakness.value}</h4>
              </div>
            ))}
          </div>
        )}
        {data.resistances && (
          <div className="resistance-container">
            <h4>Resistances: </h4>
            {data.resistances.map((resistance, index) => (
              <div className="resistance">
                <img
                  src={returnType(resistance.type)}
                  alt={resistance.type}
                  className="type-img"
                />
                <h4 className="resistance-value">{resistance.value}</h4>
              </div>
            ))}
          </div>
        )}
        {data.retreatCost && (
          <div className="retreat">
            <h4>Retreat Cost: </h4>
            {data.retreatCost.map((cost, index) => (
              <img
                src={returnType(cost)}
                alt={cost}
                key={index}
                className="type-img"
              />
            ))}
          </div>
        )}
        {data.supertype === "Trainer" && (
          <div className="trainer-container">
            <h2>
              Subtypes:{" "}
              {data.subtypes.map((subtype, index) => (
                <span key={index}>{subtype} </span>
              ))}
            </h2>
            <h2>Rules</h2>
            {data.rules.map((rule, index) => (
              <h2>
                {index + 1}: <span className="rule">{rule}</span>
              </h2>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Game;
