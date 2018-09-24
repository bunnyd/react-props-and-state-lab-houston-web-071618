import React from "react";

import Pet from "./Pet";

const PetBrowser = props => {
  const petCards = props.pets.map(pet => (
    <Pet pet={pet} key={pet.id} onAdoptPet={props.onAdoptPet} />
  ));

  return <div className="ui cards">{petCards}</div>;
};

// class PetBrowser extends React.Component {
//   render() {
//     return <div className="ui cards"><Pet /></div>
//   }
// }

export default PetBrowser;
