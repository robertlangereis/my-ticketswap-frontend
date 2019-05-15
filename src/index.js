import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import {Provider} from 'react-redux'
import store from './store'
import CssBaseline from '@material-ui/core/CssBaseline';


ReactDOM.render(
	<React.Fragment>
	<CssBaseline />
	<Provider store={store}>
		<App />
	</Provider>
</React.Fragment>,
	document.getElementById('root')
)
registerServiceWorker()
