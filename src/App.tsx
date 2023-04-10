import axios from 'axios';
import AllRoutes from "./AllRoutes"
import React from 'react';
axios.defaults.baseURL ="http://localhost:3001"


function App(){
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;




