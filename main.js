import './style.css'
import pandaLogo from '/panda.svg'
import { setupCounter } from './counter.js'

/**
 * @description Main Page for Panda UI
 * 
 */

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://pandacarnival.io" target="_blank">
      <img src="${pandaLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Panda UI</h1>
    <p class="read-the-docs">
      A UI framework that will knock your butt off!
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
