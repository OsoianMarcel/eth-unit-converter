import {changeMode} from '../appActions';
import jsonLocalStorage from '../services/json-localstorage';

export default store => {
	const savedMode = jsonLocalStorage.get('settings.extended');
	if (savedMode !== undefined) {
		store.dispatch(changeMode(savedMode));
	}
};