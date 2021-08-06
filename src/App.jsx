
import './App.css';
import CreateItem from './components/CreateItem';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  console.log(localStorage.length)
  return (
    <div className="App">
      <Header />

      {localStorage.length > 0 ? <CreateItem /> : <WelcomeScreen />}
      
      
    </div>
  );
  
}

export default App;
