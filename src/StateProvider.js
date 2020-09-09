import React, { createContext, useContext, useReducer} from 'react';

// Prepare the dataLayer
export const StateContext = createContext();

// Wrap our app and provide datalayer to every component
export const StateProvider =({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pukll information from data layer
export const useStateValue = () => useContext(StateContext);