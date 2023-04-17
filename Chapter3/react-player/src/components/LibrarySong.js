import React from 'react';

const LibrarySong = ({song,  songs, currentSong, setCurrentSong, id}) => {


    //Select clicked song from library
    const songSelectHandler = () => {
        //const selectedSong = songs.filter((individual) => individual.id === song.id);
        setCurrentSong(song);
    };

    return(
        <div onClick={songSelectHandler} className={`library-song ${song.id === currentSong.id ? "selected" : ""} `}>
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    );
} 

export default LibrarySong;