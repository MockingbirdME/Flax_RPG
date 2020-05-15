import React, {useState, useEffect} from "react";

const StrainContext = React.createContext();

export default StrainContext;

export const StrainContextProvider = props => {  
  const [strains, setStrains] = useState({});
  
  const loadStrains = async () => {
    const response = await fetch('/strains');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    setStrains(body.Strains);
  };
  
  useEffect(() => {
    loadStrains();
  }, []);
  
  
  return <StrainContext.Provider value={{
    strains
  }}>{props.children}</StrainContext.Provider>;
};
