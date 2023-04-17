import React , {useState} from 'react';
//Styles
import './styles/app.scss';
//Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library'
//Utils
import data from './util';


function App() {

  //Functions

  //Get random song at the start
  const getRandomSong = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
  }

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong , setCurrentSong] = useState(getRandomSong(songs));
  const [isPlaying, setIsPlaying] = useState(false);

  
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
