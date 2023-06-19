import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({
  // curtidas,mensagens,compartilhamentos, nome, descricao, hashtags, musica,url
  likes,messages,shares,name,description,music,url, hashtags
}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  // let scrollando = document.getElementById("videos");
  
  // scrollando.addEventListener("scroll", scrollar());
  // console.log(scrollando)
  
  // function scrollar(){
  //   videoRef.current.pause();
  // }

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
    <div className="video" id="videos">
      <video
        className="video__player"
        ref={videoRef}
        onClick={darPlayVideo}
        loop
        src={url}
      ></video>

      <VideoSidebar 
        // curtidas={curtidas}
        // mensagens={mensagens}
        // compartilhamentos={compartilhamentos}
        likes = {likes}
        messages = {messages}
        shares = {shares}
      />
      <VideoFooter 
      // nome = {nome}
      // descricao={descricao}
      hashtags={hashtags}
      // musica={musica}
      description = {description}
      music = {music}
      name = {name}
      />
    </div>
  );
}

export default Video;
