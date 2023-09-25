import './styles/App.css';
import StartPage from './contents-page/StartPage';
import About from './contents-page/About';
import Advantages from './contents-page/Advantages';
import Products from './contents-page/Products';

function App() {
  return (
    <div className='App'>
      <StartPage />
      <About />
      <Advantages />
      <Products />
    </div>
  );
}

export default App;
