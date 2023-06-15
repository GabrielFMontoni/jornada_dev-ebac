import React, { useRef, useState } from "react";
import "./video.css";
function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function darPlayVideo() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={darPlayVideo}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a"
      ></video>
    </div>
  );
}

export default Video;