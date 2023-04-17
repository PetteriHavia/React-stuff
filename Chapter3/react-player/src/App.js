import React , {useState} from 'react';
//Styles
import './styles/app.scss';
//Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Navigation';
//Utils
import data from './data';


function App() {

  //Functions
  //Get random song when app starts/refresh
  const getRandomSong = (array) => {
    const randomSong = array[Math.floor(Math.random() * array.length)];
    return randomSong;
  }

  //States
  const [songs, setSongs] = useState(data());
  const [currentSong , setCurrentSong] = useState(getRandomSong(songs));
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong}/>
      <Player songs={songs} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setCurrentSong={setCurrentSong} />
      <Library songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} libraryStatus={libraryStatus}/>
    </div>
  );
}

export default App;
