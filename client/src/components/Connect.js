import React, { Component } from 'react'

export class Connect extends Component {
  textRef = null;

  constructor(props) {
    super(props);
    this.textRef = React.createRef();
  }

  createOffer = async () => {
    const { pc } = this.props;
    try {
      console.log('====================================');
      console.log('Offer');
      console.log('====================================');
      const sdp = await pc.createOffer({ offerToReceiveVideo: 1 });
      console.log(JSON.stringify(sdp));
      pc.setLocalDescription(sdp);
    } catch (error) {
      console.error(error);
    }
  }

  setRemoteDescription = () => {
    const { pc } = this.props;
    const desc = JSON.parse(this.textRef.current.value);
    pc.setRemoteDescription(new RTCSessionDescription(desc));
  }

  createAnswer = async () => {
    const { pc } = this.props;
    try {
      console.log('====================================');
      console.log('Answer');
      console.log('====================================');
      const sdp = await pc.createAnswer({ offerToReceiveVideo: 1 });
      console.log(JSON.stringify(sdp));
      pc.setLocalDescription(sdp);
    } catch (error) {
      console.error(error);
    }
  }

  addCandidate = () => {
    const { pc } = this.props;
    const candidate = JSON.parse(this.textRef.current.value);
    console.log('====================================');
    console.log('Adding candidate:' + candidate);
    console.log('====================================');

    pc.addIceCandidate(new RTCIceCandidate(candidate));
  }

  render() {
    return (
      <div>
        <button onClick={this.createOffer}>Offer</button>
        <button onClick={this.createAnswer}>Answer</button>
        <br />
        <textarea ref={this.textRef} cols="30" rows="10"></textarea>
        <br />
        <button onClick={this.setRemoteDescription}>Set remote desc</button>
        <button onClick={this.addCandidate}>Add candidate</button>
      </div>
    )
  }
}
