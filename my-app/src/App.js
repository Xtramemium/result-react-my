import logo from './logo.svg';
import './App.css';
const date = new Date().toDateString().toLocaleString()

// export const App = () => {
//     return (     // декларативный подход начало
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <p>
//                     Edit <code>src/App.js</code> как нибудь разберемся .
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//                 <span>
//                     {date}
//                 </span>
//             </header>
//         </div>  // конец
//     );
// }
export const App = () => {
    return (
        // декларативный подход начало
        React.createElement(
            "div",
            {
                className: "App"
            },
            React.createElement(
                "header",
                {
                    className: "App-header"
                },
                React.createElement("img", {
                    src: logo,
                    className: "App-logo",
                    alt: "logo"
                }), React.createElement(
                    "p",
                    null,
                    "Edit ",
                    React.createElement("code", null, "src/App.js"),
                    "we can handle it."
                ),
                React.createElement(
                    "a",
                    {
                        className: "App-link",
                        href: "https://reactjs.org",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    "Learn React"
                ),
                React.createElement("span", null, date)
            )
        ) // конец
    );
};



