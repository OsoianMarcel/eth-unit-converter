import {CHANGE_ROWS, CHANGE_MODE} from './appConstants';
import units from './configs/units';
import BigNumber from 'bignumber.js';

const INITIAL_STATE = {
	inputRows: units.map(obj => ({...obj, value: ''})),
	extended: true
};

export default function (state = INITIAL_STATE, {type, payload}) {
	switch (type) {
	case CHANGE_ROWS:
		const rowChangeInitiator = state.inputRows.filter(ri => ri.name === payload.name)[0];
		if (!rowChangeInitiator) {
			throw new Error(`Can not change rows, because name "${payload.name}" not found`);
		}

		const isEmptyValue = payload.value.trim() === '';

		const wei = !isEmptyValue ? BigNumber(payload.value).shiftedBy(rowChangeInitiator.dec) : BigNumber(0);

		const newInputRows = [];
		for (let i = 0; i < state.inputRows.length; i++) {
			let newVal;
			if (isEmptyValue) {
				newVal = '';
			} else if (state.inputRows[i].name === payload.name) {
				newVal = payload.value;
			} else {
				newVal = wei.shiftedBy(-state.inputRows[i].dec).toString(10);
			}

			newInputRows.push({
				...state.inputRows[i],
				value: newVal
			});
		}

		return {...state, inputRows: newInputRows};
	case CHANGE_MODE:
		return {...state, extended: payload};
	default:
		return state;
	}
}