import React from 'react';
import "./Cards.css";
import Card from "./Card";
import h from "../img/h.jpg";
import a from "../img/a.jpg";
import d from "../img/d.jpg";
import r from "../img/r.jpg";
import b from "../img/b.jpg";

function Cards() {
  return (
    <div className="container">
      <div className="row">
        <Card
          title="Mammals"
          images={h}
          old_price="9,999"
          newPrice="Types..."
          dollar="$"
          alt="h"
          exp_date="Mammals include humans and all other animals that are warm-blooded vertebrates with hair."
        />
        <Card
          title="Amphibians"
          images={a}
          old_price="599"
          newPrice="Types..."
          dollar="$"
          alt="a"
          exp_date="Amphibians are small vertebrates that need water, or a moist environment, to survive."
        />
        <Card
          title="Fishes"
          images={d}
          old_price="7999"
          newPrice="Types..."
          dollar="$"
          alt="d"
          exp_date="Fish are aquatic vertebrate animals that have gills but lack limbs with digits, like fingers or toes"
        />
        <Card
          title="Reptiles"
          images={r}
          old_price="999"
          newPrice="Types..."
          dollar="$"
          alt="r"
          exp_date="Reptiles are cold-blooded vertebrates.They have dry skin covered with scales or bony plates "
        />
<Card
          title="Birds"
          images={b}
          old_price="999"
          newPrice="Types..."
          dollar="$"
          alt="h"
          exp_date="Birds are a group of warm-blooded vertebrates constituting the class Aves characterised by feathers."
        />

      </div>
 

    </div>
  );
}
export default Cards;