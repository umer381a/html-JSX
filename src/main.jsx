import React from 'react'
import './index.css'
import * as ReactDOM from 'react-dom';


const render = () => {
  document.getElementById("html").innerHTML = `
  <h1>Hello HTML<h1>
  <input />
  <pre>${(new Date).toLocaleTimeString()}</pre>
`

  const container = document.getElementById('root');
  ReactDOM.render(
    React.createElement("h1", null, "Hello React",
      React.createElement("div", null,
        React.createElement("input", null),
      ), React.createElement("pre", null, (new Date).toLocaleTimeString())
    ), container)
}

setInterval(render, 1000)

