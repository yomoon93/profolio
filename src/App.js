import React from 'react'
import './App.css'
import Particles from 'react-particles-js'


function App() {
  return (
    <div className="App">
      By Kevin Munar
    
      <Particles
  style={{ position: "relative" }}
  height="95%"
  width="95%"
  className='particles'

  params={{
    particles: {
      color: {
        value: "#5bccf6"
      },
      line_linked: {
        color: {
          value: "#fcde67"
        }
      },
      number: {
        value: 100
      },
      size: {
        value: 3
      },
      background:{
        color:"#5bccf6"
      }
    }
  }}
/>
    </div>
  );
}

export default App;
