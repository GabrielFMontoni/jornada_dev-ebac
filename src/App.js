import "./App.css";
import Video from "./pages/video";

function App() {
  return (
    <div className="App">
      <h1>Gabriel Montoni's TikTok Clone</h1>
      <div className="app__videos">
        <Video
          curtidas={567}
          mensagens={415}
          compartilhamentos={24}
          nome="Gabriel Montoni"
          descricao="Gatinho Fofinho"
          hashtags="#foryou #fy"
          musica="original song by Gabriel Montoni"
          url="https://firebasestorage.googleapis.com/v0/b/video-2db61.appspot.com/o/X2Download.app-Que%20Bonito%20Gatito%20%23Shorts%20%23top-(720p60).mp4?alt=media&token=538b050d-b480-4995-a3a8-2ba5dcecc808"
        />
        <Video
          curtidas={424}
          mensagens={213}
          compartilhamentos={3}
          nome="Silvio Santos"
          descricao="MAOE olhem o gato"
          hashtags="#heehe #hihi"
          musica="original song by Silvio Santos"
          url="https://firebasestorage.googleapis.com/v0/b/video-2db61.appspot.com/o/X2Download.app-Que%20Bonito%20Gatito%20%23Shorts%20%23top-(720p60).mp4?alt=media&token=538b050d-b480-4995-a3a8-2ba5dcecc808"
        />
        <Video
          curtidas={123}
          mensagens={12}
          compartilhamentos={2}
          nome="User Aleatorio"
          descricao="Dont do it, cat"
          hashtags="#gatofofo #gato"
          musica="Atirei o pau no gato to to"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
        <Video
          curtidas={46}
          mensagens={42}
          compartilhamentos={1}
          nome="MC Kekel"
          descricao="fofo"
          hashtags=""
          musica="original song by MC Kekel"
          url="https://firebasestorage.googleapis.com/v0/b/video-2db61.appspot.com/o/X2Download.app-Que%20Bonito%20Gatito%20%23Shorts%20%23top-(720p60).mp4?alt=media&token=538b050d-b480-4995-a3a8-2ba5dcecc808"
        />
      </div>
    </div>
  );
}

export default App;
