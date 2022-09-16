import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "MD. Shifat Laskor", position: "Tech Lead (Java)", salary: 200000 },
    { id: 2, name: "Emam Hasan Bijoy", position: "Tech Lead (Python)", salary: 200000 },
    { id: 3, name: "MD. Hasibur Rahman", position: "Business Team Lead", salary: 200000 },
    { id: 4, name: "Swakshar Das Amarth", position: "Operations Team Lead", salary: 200000 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
