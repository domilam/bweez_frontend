import React, {Component} from 'react';
import './App.css';
import Qrc from './Qrc/Qrc'
import WebcamComponent from './Webcam/Webcam'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'

class App extends Component{

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={() =>
          <Qrc />
        } />
        <Route path="/webcam" exact render={() =>
        <WebcamComponent />
        } />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
