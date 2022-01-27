import * as React from 'react'

const CountContext = React.createContext()
const DispatchContext = React.createContext();

function countReducer(state, action) {
    switch (action.type) {
        case 'increment': {
            return { count: state.count + 1 }
        }
        case 'decrement': {
            return { count: state.count - 1 }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function CountProvider({ children }) {
    const [state, dispatch] = React.useReducer(countReducer, { count: 0 });

    return (
        // Multiple context to avoid rerendering
        <DispatchContext.Provider value={dispatch}>
            <CountContext.Provider value={state}>
                {children}
            </CountContext.Provider>
        </DispatchContext.Provider>
    )
}

function useCount() {
    const context = React.useContext(CountContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

function useDispatch() {
    const context = React.useContext(DispatchContext)
    if (context === undefined) {
        throw new Error('useDispatch must be used within a CountProvider')
    }
    return context
}

export { CountProvider, useCount, useDispatch }