//import logo from './logo.svg';
import './App.css';
import './Quicksand.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome Tea once more";
  const likes = 50;
  //const person = {name: "Tea", age: 30};
  const link = "https://asecretword.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <br />
        <Home />
      </div>
    </div>
  );
}

export default App;
