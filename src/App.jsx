import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputRow} from './components/UI/InputRow';
import {Checkbox} from './components/UI/Checkbox';
import {changeRowValue, changeMode} from './appActions';

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
				<div className="header">
					<div className="left">
						<div className="title">
							<div className="title__xs">Ethereum</div>
							<div className="title__md">Unit Converter</div>
						</div>
					</div>
					<div className="right">
						<Checkbox checked={this.props.extended}
						          label="Extended"
						          onChange={b => this.props.changeMode(b)}/>
					</div>
				</div>

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
	let visibleInputRows = state.app.inputRows;
	if (!state.app.extended) {
		visibleInputRows = visibleInputRows.filter(ir => ir.main);
	}

	return {
		inputRows: visibleInputRows,
		extended: state.app.extended
	};
};

const mapDispatchToProps = {
	changeRowValue,
	changeMode
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);