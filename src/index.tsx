import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"
import store from 'Store'
import App from './App';
import * as serviceWorker from './serviceWorker';
// import canvasBox from "./Demo/Canvas.js"
import Love from "@/Util/Love.js"


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// canvasBox();
Love(window, document)
