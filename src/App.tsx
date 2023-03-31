import React from 'react';
import './App.css';
// import {CustomerApp,LogIn,CustomerAppClass} from './components/CustomerApp';
import { TimerAppClass,TimerApp } from './components/Timer' ;
import { CustomerAppC } from './components/CustomerApp';

const tsx = <h3>Hello World tsx</h3>

function App() {
  return (
     <div style={{marginLeft:'10px',marginRight:'10px'}} >
   {tsx}
     {/* <CustomerApp name="Rasheda" email="@gmail.com"/> */}
      {/* <LogIn name="Rasheda" /> */}
      {/* <CustomerAppClass name="Rasu"/> */}
      {/* <TimerApp name="Timer Function" /> 
      {/* <TimerAppClass name="rasu" /> */}
      {/* <TimerApp name="Timer Function" />  */}
      <CustomerAppC/>
      

       
       
     
    </div>
  );
}

export default App;
