import React from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const videoRef = React.useRef(null);
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    axios.get("/api").then((res) => setData(res.data.myVideo));
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <video
          ref={videoRef}
          src={data}
          type="video/mp4"
          width="560"
          height="315"
          controls
          autoPlay
          muted
          loop
          className="Vid1"
          onLoad={handleClick}
          onPlay={handleClick}
        ></video>

        <h1 className="blink">Parabéns você é foda!</h1>
        <h2 className="blink">Você desbloqueou uma conquista!</h2>
      </header>
    </div>
  );
}
