import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight;
  }

  const [videos, setVideos] = useState([]);

 

  async function pegarVideos() {
    const videosColecao = collection(db, "video");
    const videosSnapshot = await getDocs(videosColecao);
    const videosLista = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosLista);
  }

  useEffect(() => {
    pegarVideos();
  }, [videos]);
  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <h1 className="escrita">Gabriel Montoni's TikTok Clone</h1>
      <div className="app__videos">
        {videos.map((item) => {
          return (
            <Video
              // curtidas={item.curtidas}
              // mensagens={item.mensagens}
              // compartilhamentos={item.compartilhamentos}
              // nome={item.nome}
              // descricao={item.descricao}
              hashtags={item.hashtags}
              // musica={item.musica}
               url={item.url}
              description = {item.description}
              likes = {item.likes}
              messages = {item.messages}
              music = {item.music}
              name = {item.name}
              shares = {item.shares}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
