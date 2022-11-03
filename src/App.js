import "./App.css";
import Game from "./Game";

function App() {
    return (
        <div className="App">
            <h1>Conway's Game of Life</h1>
            <header>
                <Game />
            </header>
        </div>
    );
}

export default App;
