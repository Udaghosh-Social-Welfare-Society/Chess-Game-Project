
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

import Board from './components/Board/Board';
import AppContext from './contexts/Context';
import { useReducer } from 'react';
import { reducer } from './reducer/reducer';
import { initGameState } from './constants';

function App() {

  const [appState, dispatch] = useReducer(reducer, initGameState)
  const providerState = {
    appState, dispatch
  }

  return (
    <AppContext.Provider value={providerState}>
      <div className="App">
        {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'/>
        </Routes>
      </BrowserRouter> */}
        <Board />
      </div>
    </AppContext.Provider>
  );
}

export default App;
