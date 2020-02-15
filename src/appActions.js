import {CHANGE_ROWS} from './appConstants';

export const changeRowValue = (name, value) => {
	return {
		type: CHANGE_ROWS,
		payload: {
			name,
			value
		}
	};
};