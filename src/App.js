
import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';
import Navbar from './TicTacToe/navbar';
import Footer from './TicTacToe/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TicTacToe />
      <Footer />
    </div>
  );
}

export default App;
