
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ChessBoard from './components/chessBoard/ChessBoard';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'/>
        </Routes>
      </BrowserRouter> */}
      <ChessBoard/>
    </div>
  );
}

export default App;
