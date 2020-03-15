import {createStore} from 'redux';
import reducers from './reducers';
import initStore from './init';

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

initStore(store);

export default store;