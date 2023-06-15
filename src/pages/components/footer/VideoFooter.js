import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Gabriel Montoni</h3>
        <p>Gatinho fofinho <strong>#foryou #fy</strong></p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icone" />
          <div className="videoFooter__musicText">
            <p>original song by Gabriel Montoni</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando, representa a música"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;
