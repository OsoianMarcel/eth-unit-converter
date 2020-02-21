import {createStore} from 'redux';
import reducers from './reducers';

import {LC_EXTENDED} from '../appConstants';
import {changeMode} from '../appActions';

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const savedMode = localStorage.getItem(LC_EXTENDED);
if (savedMode !== null) {
	store.dispatch(changeMode(savedMode === '1'));
}

export default store;