import { createContext,useReducer } from "react"

const initialState = {
    isMainBodyClicked : false,
    isNavBarClicked : false
}
export const GlobalContext = createContext (initialState)
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer (Reducer,initialState)
    const handleMainBodyClick = () => {
            dispatch({type:'MAINBODY_CLICK'})
    }
    const handleNavBarClick = () => {
        dispatch({type:'NAVBAR_CLICK'})
    }
    return (
        <GlobalContext.Provider value={{state : state,handleNavBarClick,handleMainBodyClick}}>
            {children}
        </GlobalContext.Provider>
    )
} 

const Reducer = (state,action) => {
    switch(action.type) {
        case 'MAINBODY_CLICK' :
            if (state.isNavBarClicked) {
                return {
                    ...state,
                    isNavBarClicked : !state.isNavBarClicked
                }
            }
            return state
        case 'NAVBAR_CLICK' : 
            return {
                ...state,
                isNavBarClicked : !state.isNavBarClicked
            }
    }
}