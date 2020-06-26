import React, {useState, useEffect} from "react";

const TraitContext = React.createContext();

export default TraitContext;

export const TraitContextProvider = props => {  
  const [traits, setTraits] = useState({});

  const loadStrains = async () => {
    const response = await fetch('/traits');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    setTraits(body.Traits);
  };
  
  useEffect(() => {
    loadStrains();
  }, []);
  
  
  return <TraitContext.Provider value={{
    traits
  }}>{props.children}</TraitContext.Provider>;
};
