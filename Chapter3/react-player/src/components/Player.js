import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying, songs, setCurrentSong}) => {

    //Ref
    const audioRef = useRef(null);

    //Event Handlers

    //Check song state playing/pause
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        } 
    }; 

    //Keep auto playing when song is selected from library
    const autoPlayHandler = () => {
        if(isPlaying) {
            audioRef.current.play();
        }
    }

    //Update time
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    };

    //Format time
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) //Minutes : Seconds
        )
    }

    //Range drag effect and time
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]); //Go back to index zero
        }

        if(direction === 'skip-back') {
            if((currentIndex - 1 ) % songs.length === -1 ) { //If array length is equal to -1
                setCurrentSong(songs[songs.length - 1]); //Set song to be last item in array 
                return;
            }
            setCurrentSong(songs[(currentIndex - 1)  % songs.length]); 
        }
    }   
 
    //State
    const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0,}); 

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio onLoadedData={autoPlayHandler} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
} 

export default Player;