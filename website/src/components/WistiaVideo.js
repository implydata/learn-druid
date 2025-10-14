import React from 'react';

const WistiaVideo = ({ videoId, ...props }) => {
  return (
    <div className="wistia-video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${videoId}`}
        title="Wistia video player"
        allow="autoplay; fullscreen"
        allowtransparency="true"
        frameBorder="0"
        scrolling="no"
        className="wistia-video-iframe"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        {...props}
      ></iframe>
    </div>
  );
};

export default WistiaVideo;
