import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from './AppReducer';

// INITIAL STATE
const initialState = {
  transactions: []
}

// CREATE CONTEXT
export const GlobalContext = createContext(initialState);

// PROVIDER COMPONENT
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
    
  // ACTIONS
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD TRANSACTION',
      payload: transaction
    })
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
    </GlobalContext.Provider>)
}
