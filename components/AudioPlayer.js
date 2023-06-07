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
        <ReactPlayer
          width={0}
          height={0}
          url="/marryyou.mp3"
          playing={isPlaying}
          loop={true}
          progressInterval={1000}
          onProgress={handleProgress}
        />
  );
};

export default AudioPlayer;
