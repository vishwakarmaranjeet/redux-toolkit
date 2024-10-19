import logo from './logo.svg';
import Counter from './counter/Counter';
import User from "./User/User";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <User />
      </header>
    </div>
  );
}

export default App;
