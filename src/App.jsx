import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputRow} from './components/UI/InputRow';
import {Checkbox} from './components/UI/Checkbox';
import {changeRowValue, changeMode} from './appActions';
import ga from './services/ga';
import {CONTACT_EMAIL} from './configs/main';

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
					warnNonInt={ir.warnNonInt}
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
				<header className="header">
					<div className="left">
						<div className="title">
							<h2 className="title__xs">Ethereum</h2>
							<h1 className="title__md">Unit Converter</h1>
						</div>
					</div>
					<div className="right">
						<Checkbox checked={this.props.extended}
						          label="Extended"
						          onChange={m => this.onChangeMode(m)}/>
					</div>
				</header>

				<main className="input-rows">
					{this.renderInputRows()}
				</main>

				<footer className="footer">
					<div className="footer__left">
						Made with ♥<br/>
						by <a href="https://github.com/osoianmarcel"
						      rel="noreferrer noopener"
						      target="_blank">
							Osoian Marcel
						</a>
					</div>
					<div className="footer__right">
						For feature requests<br/>
						or bugs <a href={`mailto:${CONTACT_EMAIL}?subject=Feature%2FBug%20related%20to%20Eth%20Unit%20Converter`}>contact me</a>
					</div>
				</footer>
			</div>
		);
	}

	onInputRowChange(name, value) {
		this.props.changeRowValue(name, value);
	}

	onChangeMode(mode) {
		this.props.changeMode(mode);

		ga.sendEvent({
			category: 'UI',
			action: 'Change Mode',
			label: mode ? 'Extended' : 'Basic'
		});
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