import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';


const PlayerControls = ({ currentSong, isPlaying, setIsPlaying }) => {
  
  const soundRef = useRef(null);

  const playSong = () => {
    if (currentSong && !soundRef.current) {
      soundRef.current = new Howl({
        src: [currentSong.url],
        html5: true  
      });
      soundRef.current.play();
      setIsPlaying(true);
    } else if (soundRef.current) {
      soundRef.current.play();
    }
  };

  const pauseSong = () => {
    if (soundRef.current) {
      soundRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      playSong();
    } else {
      pauseSong();
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.stop(); // Cleanup to stop the sound if unmounted
        soundRef.current = null;
      }
    };
  }, [currentSong, isPlaying]);

};

export default PlayerControls;

