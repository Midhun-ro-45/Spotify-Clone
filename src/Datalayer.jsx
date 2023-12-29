import React, { useContext, createContext, useReducer } from 'react'

export const DatalayerContext = createContext();

export const Datalayer = ({ initialState, reducer, children }) => {
    return <DatalayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DatalayerContext.Provider>
}