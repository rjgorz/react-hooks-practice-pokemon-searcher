import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleSubmit }) {
  const initialFormValues = {
    name: "",
    hp: 0,
    frontUrl: "",
    backUrl: "",
  }

  const [formData, setFormData] = useState(initialFormValues);
  
  function handleInput(e) {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  }

  const newPokemon = {
    name: formData.name,
    hp: parseInt(formData.hp),
    sprites: {
      front: formData.frontUrl,
      back: formData.backUrl,
    },
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={(e) => {
        handleSubmit(e, newPokemon);
        setFormData(initialFormValues);
      }}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleInput} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleInput} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
