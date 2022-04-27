import React, { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";

// Initial state
const initialState = {
  users: [
    {
      id: 1,
      username: "Todd",
      age: 25,
      work: "developer",
    },
    {
      id: 2,
      username: "Juliet",
      age: 22,
      work: "Human resource",
    },
    {
      id: 3,
      username: "Nuel",
      age: 26,
      work: "Artist",
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  // Call useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
