import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './styles/styles.css'
import 'semantic-ui-css/semantic.min.css'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { CookiesProvider } from 'react-cookie';
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDOM.render(<Provider
    store={store}><BrowserRouter><CookiesProvider><App/></CookiesProvider></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
