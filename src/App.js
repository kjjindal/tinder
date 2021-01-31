import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Tindercard from './Tindercard';
import Swipebuttons from './Swipebuttons';
import Chats from './Chats';
import Chatscreen from './Chatscreen';


function App() {
  return (
    <div className="app">

    <Router>

      <Switch>
      <Route path="/chat/:person"  >
    <Header backbutton="/chat" />
    <Chatscreen  />

    </Route>
    
    <Route path="/chat"  >
    <Header backbutton="/" />
    <Chats  />

    </Route>
    <Route path="/" >
    <Header />

    <Tindercard  />
    <Swipebuttons />

    </Route>


      </Switch>
    </Router>

      
    </div>
  );
}

export default App;




//always try to give default path in bootom of code 
// if not use default path at a bottom then use exact keyword in route