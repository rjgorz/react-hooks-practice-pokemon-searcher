import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(isClicked => !isClicked);
  }

  const {front, back} = sprites;

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={isClicked ? back : front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
