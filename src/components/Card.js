import { useState, Fragment } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Nav,
  NavLink,
} from "reactstrap";

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
      <Container className="p-4">
        <h5>
          Artist: <span>{cardInfo.artist}</span>
        </h5>
        <h5>
          Set: <span>{cardInfo.set.name}</span>
        </h5>
        <h5>
          Series: <span>{cardInfo.set.series}</span>
        </h5>
      </Container>
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
      <Container className="p-4">
        {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.normal ? (
          <h5>
            Normal: <span>${cardInfo.tcgplayer.prices.normal.mid}</span>
          </h5>
        ) : (
          ""
        )}
        {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.holofoil ? (
          <h5>
            Holo: <span>${cardInfo.tcgplayer.prices.holofoil.mid}</span>
          </h5>
        ) : (
          ""
        )}
        {cardInfo.tcgplayer && cardInfo.tcgplayer.prices.reverseHolofoil ? (
          <h5>
            reverse holo:{" "}
            <span>${cardInfo.tcgplayer.prices.reverseHolofoil.mid}</span>
          </h5>
        ) : (
          ""
        )}

        <h5>More data to be added soon</h5>
      </Container>
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
      <Container className="p-4">
        <h5>Game data to be added soon</h5>
      </Container>
    </Fragment>
  );

  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        className="card-container"
        style={{ background: color }}
        onClick={handleToggle}
      >
        <img src={cardInfo.images.small} alt={cardInfo.name} />
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
              <NavLink
                href="#"
                style={{ textDecoration: "underline" }}
                onClick={() => setNav("game")}
              >
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
