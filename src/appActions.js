import {CHANGE_ROWS, CHANGE_MODE} from './appConstants';
import jsonLocalStorage from './services/json-localstorage';

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
	jsonLocalStorage.set('settings.extended', isExtended);

	return {
		type: CHANGE_MODE,
		payload: isExtended
	};
};