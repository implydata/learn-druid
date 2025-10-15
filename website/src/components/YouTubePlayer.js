import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({videoId}) => {

return (
    <div>
      <YouTube videoId={videoId}  />
    </div>
  );
}

export default YouTubePlayer;