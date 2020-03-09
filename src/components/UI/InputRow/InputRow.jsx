import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import ClipboardJS from 'clipboard';
import ga from '../../../services/ga';

import './inputRow.scss';

import {ReactComponent as WarnIcon} from '../../../assets/icons/warning-24px.svg';

class InputRow extends Component {
	constructor(props) {
		super(props);

		this.clipboard = null;
		this.isClipboardSupported = ClipboardJS.isSupported();
		this.inputRef = React.createRef();
		this.copyRef = React.createRef();

		this.labelClickHandler = this.labelClickHandler.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleCopyClick = this.handleCopyClick.bind(this);
	}

	componentWillUnmount() {
		if (this.clipboard) {
			this.clipboard.destroy();
		}
	}

	componentDidMount() {
		if (this.isClipboardSupported) {
			this.clipboard = new ClipboardJS(this.copyRef.current, {
				text: () => this.props.value
			});
		}
	}

	handleInputChange(event) {
		const value = event.target.value;
		this.props.onChange(value);
	}

	labelClickHandler() {
		this.inputRef.current.select();

		ga.sendEvent({
			category: 'UI',
			action: 'Label Clicked',
			label: this.props.label
		});
	}

	handleCopyClick(e) {
		e.preventDefault();

		ga.sendEvent({
			category: 'UI',
			action: 'Copy Clicked',
			label: this.props.label
		});
	}

	render() {
		const isEmpty = this.props.value.trim() === '';

		const valBn = BigNumber(this.props.value);

		return (
			<div className="input-row">
				<div className={`input-row__label input-row__label--${this.props.main ? 'main' : 'def'}`}
				     onClick={this.labelClickHandler}>
					{this.props.label}
				</div>
				<input type="number" className={`input-row__input input-row__input--${valBn.lt(1) ? 'lt1' : 'def'}`}
				       placeholder={this.props.placeholder}
				       value={this.props.value}
				       ref={this.inputRef}
				       onChange={this.handleInputChange}/>
		        <div className="input-row__abs-box">
			        <WarnIcon
				        className="input-row__warn_icon"
				        title="This unit must be an integer"
				        style={{
				        	display: !isEmpty && !valBn.eq(0) && !valBn.isInteger() && this.props.warnNonInt ? 'block' : 'none'
				        }}
			        />
			        <a
				        href={`#copy-${this.props.label}`}
				        className="input-row__copy"
				        style={{display: this.isClipboardSupported && !isEmpty ? 'block' : 'none'}}
				        ref={this.copyRef}
				        onClick={this.handleCopyClick}>
				        Copy
			        </a>
		        </div>
			</div>
		);
	}
}

InputRow.defaultProps = {
	label: 'Input',
	value: '',
	main: false,
	warnNonInt: false,
	placeholder: '0',
	onChange: () => {}
};

InputRow.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	main: PropTypes.bool,
	warnNonInt: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
};

export default InputRow;
