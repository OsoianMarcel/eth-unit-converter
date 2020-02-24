import {createStore} from 'redux';
import reducers from './reducers';

import {changeMode} from '../appActions';
import jsonLocalStorage from '../services/json-localstorage';

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const savedMode = jsonLocalStorage.get('settings.extended');
if (savedMode !== undefined) {
	store.dispatch(changeMode(savedMode));
}

export default store;