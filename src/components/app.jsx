import React, { Component } from 'react';

import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [ 'asdasda', 'sdasdasdas']
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Gif />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
