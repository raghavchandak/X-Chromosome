import React from "react";
import Firebase from "./firebase";

const FirebaseContext = React.createContext();

export const Provider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
