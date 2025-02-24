import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Dashboard from './Components/Dashboard'
import Listgroup from './Components/Listgroup';
import { FaZ } from 'react-icons/fa6';
import { KhatabookProvider } from './context/KhatabookCotext';


const App = () => { 



  
 

  return (
    <KhatabookProvider> 
      <Navbar /> 

      <Form  />

     <Dashboard  />

     <Listgroup   />
      
    // </KhatabookProvider>
  )
}

export default App
