import "./App.css";
import Scanner from "./component/Scanner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QR code scanning</h1>
        <Scanner />
      </header>
    </div>
  );
}

export default App;
