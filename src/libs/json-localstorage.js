import _ from 'lodash';

class JsonLocalstorage {
	/**
	 * Constructor
	 *
	 * @param {String} key The key
	 */
	constructor(key) {
		this.key = key;
	}

	/**
	 * Set a value by path
	 *
	 * @param {String} path
	 * @param {*} value
	 * @returns {*}
	 */
	set(path, value) {
		const newObj = _.set(this.getAll() || {}, path, value);

		this.setAll(newObj);

		return newObj;
	}

	/**
	 * Get a value by path
	 *
	 * @param {String} path
	 * @param {*} [def]
	 * @returns {*}
	 */
	get(path, def) {
		return _.get(this.getAll(), path, def);
	}

	/**
	 * Save all
	 *
	 * @param {*} data
	 * @returns {*}
	 */
	setAll(data) {
		localStorage.setItem(this.key, JSON.stringify(data));

		return data;
	}

	/**
	 * Get all
	 *
	 * @returns {*}
	 */
	getAll() {
		const lsVal = localStorage.getItem(this.key);

		if (lsVal === null) {
			return undefined;
		}

		return JSON.parse(lsVal);
	}
}

export default JsonLocalstorage;