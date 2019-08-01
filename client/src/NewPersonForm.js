import React, { useState } from "react";

import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

export default function NewPersonForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const person = {
          name,
          age: Number(age)
        };
        console.log("submitting person", person);
        setAge("");
        setName("");
      }}
    >
      <h3>Add Person Form</h3>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}
