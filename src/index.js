import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import units from './configs/units';

import * as serviceWorker from './workers/serviceWorker';

import {InputRow} from './components/UI/InputRow';

import './index.scss';

class App extends Component {
	constructor() {
		super();
		this.inputRows = {};

		for (let i = 0; i < units.length; i++) {
			let unit = units[i];
			this.inputRows[i] = <InputRow
			key={i}
			label={unit.name}
			main={unit.main}
			value={0}
			onChange={v => this.onInputRowChange(i, v)}
			/>;
		}
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<React.StrictMode>
				<Provider store={store}>
					
				<div className="main-container">
					<div>
						Ethereum<br/>
						Unit Converter
					</div>
					{Object.values(this.inputRows)}
				</div>

				</Provider>
			</React.StrictMode>
		);
	}

	onInputRowChange(id, value) {
		console.log(id, value);
	}

	renderInputs() {
		const inputs = [];
		
		return inputs;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
