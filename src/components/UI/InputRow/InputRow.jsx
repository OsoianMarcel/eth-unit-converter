import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './inputRow.scss';

class InputRow extends Component {
	constructor(props) {
		super(props);

        this.state = {value: this.props.value};
        
        this.inputRef = React.createRef();

		this.labelClickHandler = this.labelClickHandler.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
        const value = event.target.value;
        this.setState({value});
        this.props.onChange(value);
	}

	labelClickHandler() {
	 	this.inputRef.current.focus();
	}

	render() {
		return (
			<div className="input-row">
                <div className={`input-row__label input-row__label--${this.props.main ? 'main' : 'def'}`}
                    onClick={this.labelClickHandler}>
                    {this.props.label}
                </div>
                <input type="text" className="input-row__input"
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    ref={this.inputRef}
                    onChange={this.handleInputChange}/>
			</div>
		);
	}
}

InputRow.defaultProps = {
    label: 'Input',
    value: 0,
    main: false,
	placeholder: '0',
	onChange: () => {}
};

InputRow.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    main: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
};

export default InputRow;
