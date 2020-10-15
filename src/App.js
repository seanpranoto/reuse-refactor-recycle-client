import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Home from './pages/Home';
import ShowOne from './pages/ShowOne';
import Update from './pages/Update';
import Delete from './pages/Delete';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <ShowOne path="/:_id" />
        <Update path="/:_id/update" />
        <Delete path="/:_id/delete" />
      </Router>
    </div>
  );
}

export default App;
