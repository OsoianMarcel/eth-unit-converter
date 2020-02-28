class Ga {
	/**
	 * Constructor
	 *
	 * @param {String} gaId GA id
	 */
	constructor(gaId) {
		this.gaId = gaId;
		this.isInit = false;
	}

	/**
	 * GA function wrapper
	 * All parameters are passed to original window.ga function
	 * Does not throw errors
	 *
	 * @return {*} Original GA response
	 */
	ga() {
		if (!window.ga) {
			return undefined;
		}

		if (!this.isInit) {
			window.ga('create', this.gaId, 'auto');
			this.isInit = true;
		}

		return window.ga.apply(window.ga, arguments);
	}

	/**
	 * Send event
	 *
	 * @param {String} category
	 * @param {String} action
	 * @param {String} [label]
	 * @param {Number} [value]
	 */
	sendEvent({category, action, label, value}) {
		this.ga('send', {
			hitType: 'event',
			eventCategory: category,
			eventAction: action,
			eventLabel: label,
			eventValue: value
		});
	}
}

export default Ga;