import React, { createContext, useReducer } from "react";
import { Type } from "../../utility/action.type";

// Initial State
const initialState = {
    basket: [],  // ✅ Ensure basket is initialized as an empty array
    user: null
};

// Reducer Function
export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            // * check if the item exists
            const existingItem = state.basket.find((item) => item.id === action.item.id);
            if (!existingItem) {
                return {
                    ...state,
                    basket: [...state.basket, { ...action.item, amount: 1 }]
                };
            } else {
                const updatedBasket = state.basket.map((item) => {
                    return item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item;
                });

                return {
                    ...state,
                    basket: updatedBasket
                };
            }

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
