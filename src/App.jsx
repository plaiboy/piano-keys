import { useEffect } from 'react';
import AudioPlayer from '../Components/AudioPlayer';
import './App.css';

function App() {
  const AudioPlayer = AudioPlayer();

  useEffect(() => {
    AudioPlayer.setIstrument("acoustic_grand_piano");
  }, []);

  const handleClick = () => {
    AudioPlayer.playnote("c4");
  };

  return (
    <div className='app-container'>
      <button onClick={handleClick}>Play</button>
    </div>
  )
}

export default App