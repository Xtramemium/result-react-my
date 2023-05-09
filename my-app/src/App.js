import logo from './logo.svg';
import './App.css';
const date = new Date().toDateString().toLocaleString()

export const App = () => {
    return (     // декларативный подход начало
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
        </div>  // конец
    );
}

export const createMainPage = () => {
    const div = document.createElement('div')
    div.className = 'App'

    const header = document.createElement('header')
    header.className = "App-header"

    const img = document.createElement('img')
    img.src = logo
    img.className = 'App-logo'
    img.alt = 'logo'

    const p = document.createElement('p')
    p.textContent = `Edit ${<code>src/App.js</code>} как нибудь разберемся.`

    const a = document.createElement('a')
    a.className = 'App-link'
    a.href = 'https://reactjs.org'
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    a.textContent = 'Learn React'


    div.append(header)
    header.append(img, p, a)

    return div
}

const mainPage = createMainPage()
document.body.append(mainPage)


