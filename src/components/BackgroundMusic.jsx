import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // autoplay
    audioRef.current.volume = 0.4; // тихо
  }, []);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-black-50 p-3 rounded-full shadow-lg z-50">
      <button onClick={togglePlay} className="text-white text-xl">
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      <span className="text-white text-sm">Music</span>
      <audio ref={audioRef} src="/song.mp3" loop />
    </div>
  );
};

export default BackgroundMusic;
