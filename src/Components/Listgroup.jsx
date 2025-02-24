import React, { useContext } from 'react'
import ListItem from './ListItem'
import KhatabookContext from '../context/KhatabookCotext'
// import ListItem from './ListItem';
// import TransactionContext from '../context/TransactionContext';


const Listgroup = () => {
  // console.log(transactions);

  const {Transactions} = useContext(KhatabookContext)
  // console.log(Transactions)

  
  return (
   
   <div className=' w-[80%] h-auto ml-16.5 border-1 my-5 md:ml-30 '>
     { 
       Transactions.map((transaction) => <ListItem key={transaction.id} transaction={transaction} /> )    
     }
   </div>

  )
}

export default Listgroup
