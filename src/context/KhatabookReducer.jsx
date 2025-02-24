const KhatabookReducer = (state, action) => {

    switch(action.type){

        case "ADD_TRANSACTION" :
              return{
                ...state,
                Transactions : [action.payload, ...state.Transactions] 
              }

        case "DELETE_TRANSACTION" :
              return{
                ...state,
                Transactions : state.Transactions.filter((item) => item.id !== action.payload)
        }

        case "EDIT_TRANSACTION" :
             return{
              ...state,
              edit : {transaction : action.payload ,isEdit : true}
             }

       case "UPDATE_TRANSACTION" :
        return{
          ...state,
          Transactions : state.Transactions.map((item) => item.id === action.payload.id ? action.payload : item)
        }
    }
}


export default KhatabookReducer  