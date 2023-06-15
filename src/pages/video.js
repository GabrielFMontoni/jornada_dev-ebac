import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";

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
        src="https://firebasestorage.googleapis.com/v0/b/video-2db61.appspot.com/o/X2Download.app-Que%20Bonito%20Gatito%20%23Shorts%20%23top-(720p60).mp4?alt=media&token=538b050d-b480-4995-a3a8-2ba5dcecc808"
      ></video>

      {/* Side bar */}
      <VideoFooter />
    </div>
  );
}

export default Video;
