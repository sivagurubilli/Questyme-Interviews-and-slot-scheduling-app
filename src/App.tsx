import axios from 'axios';
import './App.css';
import AllRoutes from "./AllRoutes"
import React from 'react';
axios.defaults.baseURL ="http://localhost:3005"


function App(){
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;




