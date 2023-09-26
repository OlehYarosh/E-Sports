import './styles/App.css';
import StartPage from './contents-page/StartPage';
import About from './contents-page/About';
import Advantages from './contents-page/Advantages';
import Products from './contents-page/Products';
import Video from './contents-page/Video';
import Order from './contents-page/Order';

function App() {
  return (
    <div className='App'>
      <StartPage />
      <About />
      <Advantages />
      <Products />
      <Video />
      <Order />
    </div>
  );
}

export default App;
