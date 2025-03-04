import React, { useReducer, createContext } from "react";

export const DataContext = createContext();

const initialState = { basket: [] }; // Example initial state
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, action.payload] };
        default:
            return state;
    }
};

export const DataProvider = ({ children }) => {  // ✅ Corrected 'children'
    const value = useReducer(reducer, initialState);

    return (
        <DataContext.Provider value={value}>
            {children}  {/* ✅ Corrected 'children' */}
        </DataContext.Provider>
    );
};
