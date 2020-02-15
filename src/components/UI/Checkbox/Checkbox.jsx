import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './checkbox.scss';

class Checkbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: this.props.checked
		};

		this.handleClick = this.handleClick.bind(this);
	}
	/*
	  static getDerivedStateFromProps(props, state) {
		if (props.checked !== state.checked) {
		  console.log(props, state)
		  return {
			checked: props.checked
		  };
		}

		// Return null to indicate no change to state.
		return null;
	  }
	*/
	handleClick() {
		this.setState(prevState => ({checked: !prevState.checked}), () => {
			this.props.onChange(this.state.checked);
		});
	}

	render() {
		return (
			<div className="checkbox" onClick={this.handleClick}>
				<div className="checkbox__styled">
					<svg viewBox="0 0 24 24"
					     className={`checkbox__icon checkbox__icon--${!this.state.checked ? 'hidden' : 'def'}`}>
						<polyline points="20 6 9 17 4 12"/>
					</svg>
				</div>
			</div>
		);
	}
}

Checkbox.defaultProps = {
	checked: false,
	onChange: () => {}
};

Checkbox.propTypes = {
	checked: PropTypes.bool,
	onChange: PropTypes.func
};

export default Checkbox;
