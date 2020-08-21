import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
// import CharacterTraitPicker from "./characterTraitPicker";


const CharacterTraitsPicker = props => {
  const context = useContext(CharacterContext);
  const { charId } = useParams();
  
    
  const character = context.characters[charId];
  
  if (!character || !character.calculatedStats) return <div></div>;

  const traitEntitlements = character.calculatedStats.traitEntitlements || {};
  console.log(traitEntitlements.total.allotted);
  // const traits = [...Array(traitEntitlements.total.allotted)].map((value, index) => <CharacterTraitPicker key={index} index={index} />);


//   return (
//     <div>
//       <div className="" style={{display: "flex", justifyContent: "space-between", maxWidth: "40rem"}}>
//         <h2>Traits:</h2>
//         <div style={{display: "flex", justifyContent: "space-around", width: "30rem", alignItems: "center"}}>
//           <h4>Total: {traitEntitlements.total.consumed}/{traitEntitlements.total.allotted}</h4>
//           <h4>Heroic: {traitEntitlements.heroic.consumed}/{traitEntitlements.heroic.allotted}</h4>
//           <h4>Epic: {traitEntitlements.epic.consumed}/{traitEntitlements.epic.allotted}</h4>
//         </div>
//       </div>
//       {traits}
//     </div>
//   );
};

export default CharacterTraitsPicker;
