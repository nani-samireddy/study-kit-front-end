import Navbar from '../Pages/Navbar';
import Homepage from '../Pages/Hompage/Homepage';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
