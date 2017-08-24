import React, { Component } from 'react'
import './static/css/app.css'
import BigText from 'react-bigtext'

var bigTextOptions = {
    height: 100
}

class App extends Component {
    render() {
        return (
            <div className="appMainDiv">
                
                  <div className="pageContainer">
                     
                        <div className="appH2"> 
                            
                            <BigText
                                options={bigTextOptions}
                            > 
                                Ben Litwin Photography  
                            </BigText>
                        
                        </div>
                     
                  </div>
            </div>
        )
    }
}

export default App;
