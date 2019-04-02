import { combineReducers } from 'redux';
import { user } from '../reducers';

export default client =>
	combineReducers({
		apollo: client.reducer(),
		user,
	});
