import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store'

function render(){
    ReactDOM.render(
    (<BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));
}
render();
store.subscribe(render)
registerServiceWorker();
