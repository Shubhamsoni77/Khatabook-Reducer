import React, { useContext, useEffect, useState } from 'react'
import KhatabookContext from '../context/KhatabookCotext'


const Form = () => {
  // console.log(edit) 
  
  const {dispatch,edit} = useContext(KhatabookContext) 
// console.log(edit)
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")
//  console.log(amount);

  const send = (e) => {
    e.preventDefault()  
    if(edit.isEdit === false){
      dispatch({
        type : "ADD_TRANSACTION",
        payload : {id: crypto.randomUUID(), text, amount }
      })
    }else{
      dispatch({
        type : "UPDATE_TRANSACTION",
        payload : {id : edit.transaction.id ,text ,amount}
      })
    }

      setText("")
      setAmount("")
  }
   

  useEffect(() => {
    setText(edit.transaction.text)
    setAmount(edit.transaction.amount)
  },[edit])



    return (
   <form onSubmit={(e) => send(e)}
    className=' flex flex-col items-center justify-center my-10 '>
    <input 
    value={text}
    onChange={(e) => setText(e.target.value)}
    className=' w-[60%] h-9 px-2 text-xl rounded-lg border-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 duration-500 '
    type="text" placeholder='Enter Transaction'
    required />

    <input
    value={amount}
    onChange={(e) => setAmount(e.target.value)}  
    className=' w-[50%] h-9 my-5 text-xl rounded-lg border-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 duration-500 '
     type="number" placeholder='Enter Amount'
     required />

    <button
    onClick={() => { 
      send()
    }}
    className=" w-[30%] h-12 text-white font-medium rounded-2xl bg-blue-600 "
    > Save Transaction </button>

  </form>
  )
}

export default Form
