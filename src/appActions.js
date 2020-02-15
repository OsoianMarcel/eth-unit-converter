import {CHANGE_ROWS, CHANGE_MODE} from './appConstants';

export const changeRowValue = (name, value) => {
	return {
		type: CHANGE_ROWS,
		payload: {
			name,
			value
		}
	};
};

export const changeMode = (isExtended) => {
	return {
		type: CHANGE_MODE,
		payload: isExtended
	};
};