import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [videos, setVideos] = useState([]);

  async function pegarVideos() {
    const videosColecao = collection(db, "videos");
    const videosSnapshot = await getDocs(videosColecao);
    const videosLista = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosLista);
  }

  useEffect(() => {
    pegarVideos();
  }, [videos]);
  return (
    <div className="App">
      <h1>Gabriel Montoni's TikTok Clone</h1>
      <div className="app__videos">
        {videos.map((item) => {
          return (
            <Video
              curtidas={item.curtidas}
              mensagens={item.mensagens}
              compartilhamentos={item.compartilhamentos}
              nome={item.nome}
              descricao={item.descricao}
              hashtags={item.hashtags}
              musica={item.musica}
              url={item.url}
            />
          );
        })}

      
      </div>
    </div>
  );
}

export default App;
