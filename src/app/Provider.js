import React, { createContext, useState } from 'react'

const Provider = ({children}) => {
    const [state, setState] = useState({items: []});
    const clear = () => setItems({items: []});
    return (
        <AppContext.Provider value={[state, setState, clear]}>
            {children}
        </AppContext.Provider>
        )
}

export default Provider;
export const AppContext = createContext();