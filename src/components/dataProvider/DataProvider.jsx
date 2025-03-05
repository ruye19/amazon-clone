import React, { createContext, useReducer } from "react";
import { Type } from "../../utility/action.type";

// Initial State
const initialState = {
    basket: [],  // ✅ Ensure basket is initialized as an empty array
    user: null
};

// Reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            console.log("Adding item to basket:", action.item);
            return {
                ...state,
                basket: [...state.basket, action.item], // ✅ Ensure items are added properly
            };

        default:
            return state;
    }
};

// Context Creation
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    );
};
