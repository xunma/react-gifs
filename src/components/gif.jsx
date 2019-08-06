import React, { Component } from 'react';

class Gif extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const src = `https://media1.giphy.com/media/media/${this.props.id}/200.gif`;

    return <img className="gif" src={src} alt="" />;
  }
}

export default Gif;
