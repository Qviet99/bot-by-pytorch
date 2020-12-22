import React, { useEffect } from 'react';
import reactDOM from 'react-dom';
import './App.css';
import Interface from './Component/Interface/interface'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
    useEffect(()=> {
      document.title = "DTUaBot";
    })
    return (
      <>
     <div className="App">  
       <Router>    
        <div className="container">      
            <Route path ='/home' component={Interface}></Route>   
        </div>    
      </Router>    
      </div>  
     </>
    );
  }
reactDOM.render(<App />, document.getElementById("root"));
export default App;