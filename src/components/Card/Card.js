import "./card.css";
import { useState, Fragment } from "react";
import Game from "../Game/Game";
import Market from "../Market/Market";
import Misc from "../Misc/Misc";
import { Modal, ModalHeader, ModalBody, Nav, NavLink } from "reactstrap";

const Card = ({ cardInfo, color }) => {
  const [modal, setModal] = useState();
  const [nav, setNav] = useState("misc");

  const handleToggle = () => {
    setModal(!modal);
    setNav("misc");
  };

  const misc = (
    <Fragment>
      <Nav>
        <NavLink
          href="#"
          className="nav-selected"
          onClick={() => setNav("misc")}
        >
          Misc.
        </NavLink>
        <NavLink href="#" onClick={() => setNav("market")}>
          Market
        </NavLink>
        <NavLink href="#" onClick={() => setNav("game")}>
          Game
        </NavLink>
      </Nav>
      <Misc data={cardInfo} />
    </Fragment>
  );

  const market = (
    <Fragment>
      <Nav>
        <NavLink href="#" onClick={() => setNav("misc")}>
          Misc.
        </NavLink>
        <NavLink
          href="#"
          className="nav-selected"
          onClick={() => setNav("market")}
        >
          Market
        </NavLink>
        <NavLink href="#" onClick={() => setNav("game")}>
          Game
        </NavLink>
      </Nav>
      <Market data={cardInfo} />
    </Fragment>
  );

  const game = (
    <Fragment>
      <Nav>
        <NavLink href="#" onClick={() => setNav("misc")}>
          Misc.
        </NavLink>
        <NavLink href="#" onClick={() => setNav("market")}>
          Market
        </NavLink>
        <NavLink
          href="#"
          className="nav-selected"
          onClick={() => setNav("game")}
        >
          Game
        </NavLink>
      </Nav>
      <Game data={cardInfo} />
    </Fragment>
  );

  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        className="card-container"
        style={{ background: color }}
        onClick={handleToggle}
      >
        <img
          src={cardInfo.images.small}
          alt={cardInfo.name}
          className="card-img"
        />
      </div>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle} style={{ background: color }}>
          {cardInfo.name}
        </ModalHeader>
        <ModalBody>
          {nav === "misc" ? (
            misc
          ) : nav === "market" ? (
            market
          ) : nav === "game" ? (
            game
          ) : (
            <Nav>
              <NavLink href="#" onClick={() => setNav("misc")}>
                Misc.
              </NavLink>
              <NavLink href="#" onClick={() => setNav("market")}>
                Market
              </NavLink>
              <NavLink href="#" onClick={() => setNav("game")}>
                Game
              </NavLink>
            </Nav>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Card;
