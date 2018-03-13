import { Home } from './App'

/** Set the root element of the application */
const APP_ROOT = document.querySelector('#root');

/** Instantiate the Home function */
const H = new Home();

/** Mount the app to the APP_ROOT element */
APP_ROOT.appendChild(H.render());
