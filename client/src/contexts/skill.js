import React, {useState, useEffect} from "react";

const SkillContext = React.createContext();

export default SkillContext;

export const SkillContextProvider = props => {  
  const [skills, setSkills] = useState({});
  
  const loadSkills = async () => {
    const response = await fetch('/skills');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    setSkills(body.Skills);
  };
  
  useEffect(() => {
    loadSkills();
  }, []);
  
  
  return <SkillContext.Provider value={{
    skills
  }}>{props.children}</SkillContext.Provider>;
};
