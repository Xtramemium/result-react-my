import logo from './logo.svg';
import './App.css';
const date = new Date().toDateString().toLocaleString()  // Декларативный   
export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> как нибудь разберемся .
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <span>
                    {date}
                </span>
            </header>
        </div>
    );
}

