import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Typography variant="h1" gutterBottom>
          Hello World!
        </Typography>
      </header>
    </div>
  );
}

export default App;
