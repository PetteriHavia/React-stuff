import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, currentSong, libraryStatus, search, setSearch}) => {

    //Search Song
    const searchSong = songs.filter(song => song.name.toLowerCase().includes(search.toLowerCase()));

    const searchHandle = (e) => {
        setSearch(e.target.value)
    }

    return(
        <div className={`library ${libraryStatus ? 'active-library' : '' }`}>
            <h2>Library</h2>
            <div className="library-search">
                <input onChange={searchHandle} type="text" placeholder='Search'/>
            </div>  
            <div className="library-songs">
                {searchSong.map((song) => (
                <LibrarySong songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} song={song} key={song.id}/>
                ))}
            </div>
        </div>
    )
}

export default Library;