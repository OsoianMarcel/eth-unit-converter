import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputRow} from './components/UI/InputRow';
import {Checkbox} from './components/UI/Checkbox';
import {changeRowValue} from './appActions';

import './app.scss';

class App extends Component {
	renderInputRows() {
		const items = [];
		for (let i = 0; i < this.props.inputRows.length; i++) {
			let ir = this.props.inputRows[i];
			items.push(
				<InputRow
					key={i}
					label={ir.name}
					main={ir.main}
					value={ir.value}
					onChange={v => this.onInputRowChange(ir.name, v)}
				/>
			);
		}

		return items;
	}

	render() {
		return (
			<div className="main-container">
				<div className="title">
					<div className="title__xs">Ethereum</div>
					<div className="title__md">Unit Converter</div>
				</div>
				<Checkbox/>
				<div className="input-rows">
					{this.renderInputRows()}
				</div>
				<div className="footer">
					Made with ♥<br/>
					by <a href="https://github.com/osoianmarcel" rel="noreferrer noopener" target="_blank">Osoian
					Marcel</a>
				</div>
			</div>
		);
	}

	onInputRowChange(name, value) {
		this.props.changeRowValue(name, value);
	}
}


const mapStateToProps = state => {
	return {
		inputRows: state.app.inputRows
	};
};

const mapDispatchToProps = {
	changeRowValue
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);