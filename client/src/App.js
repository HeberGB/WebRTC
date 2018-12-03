import React, { Component } from 'react';
import { Me } from './components/Me'
import { Other } from './components/Other'
import { Connect } from './components/Connect'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const pcConfig = null;
    this.pc = new RTCPeerConnection(pcConfig);
  }
  render() {
    return (
      <div className="App">
        <Me pc={this.pc}></Me>
        <Other pc={this.pc} src={this.remoteTrack}></Other>
        <Connect pc={this.pc}></Connect>
      </div>
    );
  }
}

export default App;
