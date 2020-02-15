import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';

import './inputRow.scss';

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

	isLt1() {
		return BigNumber(this.props.value).lt(1);
	}

	render() {
		return (
			<div className="input-row">
				<div className={`input-row__label input-row__label--${this.props.main ? 'main' : 'def'}`}
				     onClick={this.labelClickHandler}>
					{this.props.label}
				</div>
				<input type="number" className={`input-row__input input-row__input--${this.isLt1() ? 'lt1' : 'def'}`}
				       placeholder={this.props.placeholder}
				       value={this.props.value}
				       ref={this.inputRef}
				       onChange={this.handleInputChange}/>
			</div>
		);
	}
}

InputRow.defaultProps = {
	label: 'Input',
	value: '',
	main: false,
	placeholder: '0',
	onChange: () => {}
};

InputRow.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	main: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
};

export default InputRow;
