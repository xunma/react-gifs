import React from 'react';

import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif key={gif} id={gif} />)}
    </div>
  );
}

export default GifList;
