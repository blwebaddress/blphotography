import React, { Component } from 'react'
import './static/css/app.css'
import { Textfit } from 'react-textfit'

class App extends Component {
    render() {
        return (
          <div className="appMainDiv">
              <Textfit
                  mode="single"
              >
                  <div className="headingContainer">
                      <div className="appH2"> Ben Litwin Photography </div>
                  </div>
              </Textfit>
          </div>
        );
    }
}

export default App;
