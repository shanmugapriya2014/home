
import './App.css';
import Aboutus from './components/Aboutus';
import Career from './components/Career';
import Contactus from './components/Contactus';
import Header from './components/Hearder';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Career/>
      <Aboutus/>
      <Contactus/>
      
    </div>
  );
}

export default App;