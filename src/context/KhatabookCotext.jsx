import { createContext, useReducer } from "react";
import KhatabookReducer from "./KhatabookReducer";

const KhatabookContext = createContext() 

export const KhatabookProvider = ({children}) => {

    const initialState = { 
        Transactions : [ ],
        edit : { transaction : {}, isEdit : false}
    }
    
    const [state, dispatch] = useReducer(KhatabookReducer, initialState )
    
    // console.log(initialState); 
    


    return(

         <KhatabookContext.Provider value={{...state, dispatch}}>
            {children}
        </KhatabookContext.Provider>
   )
}




export default KhatabookContext 