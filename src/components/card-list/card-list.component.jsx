import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.people.map(person => (
        <Card key={person.id} person={person} />
      ))}
    </div>
  );
};
