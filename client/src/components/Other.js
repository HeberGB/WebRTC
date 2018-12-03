import React, { Component } from 'react';

export class Other extends Component {
  constructor(props) {
    super(props);
    this.webcam = React.createRef();
  }

  async componentDidMount() {
    const { pc } = this.props;
    pc.ontrack = (ev) => {
      console.log('====================================');
      console.log(ev.streams);
      console.log('====================================');
      this.webcam.current.srcObject = ev.streams[0];
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