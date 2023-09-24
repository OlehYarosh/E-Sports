import './styles/App.css';
import StartPage from './contents-page/StartPage';
import About from './contents-page/About';
import Advantages from './contents-page/Advantages';

function App() {
  return (
    <div className='app'>
      <StartPage />
      <About />
      <Advantages />
    </div>
  );
}

export default App;
