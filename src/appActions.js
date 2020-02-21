import {CHANGE_ROWS, CHANGE_MODE, LC_EXTENDED} from './appConstants';

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
	localStorage.setItem(LC_EXTENDED, (isExtended ? 1 : 0).toString());

	return {
		type: CHANGE_MODE,
		payload: isExtended
	};
};