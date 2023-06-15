import './App.css';
import Video from './pages/video';
function App() {
  return (
    <div className="App">
      <h1>Gabriel Montoni's TikTok Clone</h1>
      <div className='app__videos'>
        <Video />
        <Video/>
        <Video/>
      </div>
      
    </div>
  );
}

export default App;
