import logo from './logo.svg';
import './App.css';
import {Header, MainPage, WorkPage} from './components'


function App(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{props.text}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <MainPage />
      <WorkPage />
    </div>
  );
}

export default App;
