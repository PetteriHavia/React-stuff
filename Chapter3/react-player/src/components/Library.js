import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, currentSong, libraryStatus, search, setSearch}) => {

    //Search Song
    const searchSong = songs.filter(song => {
       return song.name.toLowerCase().includes( search.toLowerCase());
    })
        
        //const search = songs.filter((individual))
        //const value = e.target.value;
        //setSearch({...search, value});
        //console.log(search);
        //const selectedSong = songs.filter((individual) => individual.id === song.id);


    return(
        <div className={`library ${libraryStatus ? 'active-library' : '' }`}>
            <h2>Library</h2>
            <div className="library-search">
                <input onChange={e => setSearch(e.target.value)} type="text" placeholder='Search'/>
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
