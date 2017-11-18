import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <div style={introStyle}>
          <h3>hi, my name is sean.</h3>
          <h3>thanks for stoping by. here are some links to wander down.</h3>
          <h3><a href='https://github.com/SeanAvery'>github</a></h3>
          <h3><a href='https://twitter.com/breadofsean'>twitter</a></h3>
          <h3><a href='https://www.instagram.com/seanpaul3344/'>instagram</a></h3>
        </div>
      </div>
    )
  }
}

export default App

const appStyle = {
  fontFamily: 'Roboto',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  color: '#383838'
}

const introStyle = {
  padding: 30,
  width: 800,
  height: 500
}
