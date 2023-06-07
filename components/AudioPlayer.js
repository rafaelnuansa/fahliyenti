import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import ReactPlayer from "react-player";
const AudioPlayer = ({ autoPlay }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };

  return (
    <div className="audio-player">
      <div className="audio-container">
        <ReactPlayer
          url="/marryyou.mp3"
          playing={isPlaying}
          loop={true}
          progressInterval={1000}
          onProgress={handleProgress}
        />
        <button className="audio-button" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
