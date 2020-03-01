import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';

import './inputRow.scss';

import {ReactComponent as WarnIcon} from '../../../assets/icons/warning-24px.svg';

class InputRow extends Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();

		this.labelClickHandler = this.labelClickHandler.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const value = event.target.value;
		this.props.onChange(value);
	}

	labelClickHandler() {
		this.inputRef.current.select();
	}

	render() {
		const valBn = BigNumber(this.props.value),
			isLt1 = valBn.lt(1),
			notZero = !valBn.eq(0);

		const warnIcon = <WarnIcon className="input-row__warn_icon"/>;

		return (
			<div className="input-row">
				<div className={`input-row__label input-row__label--${this.props.main ? 'main' : 'def'}`}
				     onClick={this.labelClickHandler}>
					{this.props.label}
				</div>
				<input type="number" className={`input-row__input input-row__input--${isLt1 ? 'lt1' : 'def'}`}
				       placeholder={this.props.placeholder}
				       value={this.props.value}
				       ref={this.inputRef}
				       onChange={this.handleInputChange}/>
				{isLt1 && notZero && this.props.warnUnderZero ? warnIcon : ''}
			</div>
		);
	}
}

InputRow.defaultProps = {
	label: 'Input',
	value: '',
	main: false,
	warnUnderZero: false,
	placeholder: '0',
	onChange: () => {}
};

InputRow.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	main: PropTypes.bool,
	warnUnderZero: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
};

export default InputRow;
