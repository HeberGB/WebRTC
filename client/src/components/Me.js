import React, { Component } from 'react';

export class Me extends Component {
  constructor(props) {
    super(props);
    this.webcam = React.createRef();
  }
  async componentDidMount() {
    const { pc } = this.props;
    pc.onicecandidate = (ev) => {
      if (ev.candidate) console.log(JSON.stringify(ev.candidate));
    }

    pc.oniceconnectionstatechange = (ev) => {
      console.log(ev);
    }

    const constraints = {
      video: {
        width: 1280,
        height: 720,
      }
    };
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.webcam.current.srcObject = stream;
      stream.getTracks().forEach(track => pc.addTrack(track, stream));
      this.webcam.current.muted = true;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <video className="Me" ref={this.webcam} autoPlay></video>
      </div>
    );
  }
}