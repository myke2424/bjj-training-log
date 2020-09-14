import React from 'react';
import './App.css';
import routes from './routes/Router';

function App() {
  return (
    <div className='App'>
      <div className='container'>{routes()}</div>
    </div>
  );
}

export default App;
