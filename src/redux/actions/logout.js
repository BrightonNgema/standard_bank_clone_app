import { AsyncStorage } from 'react-native';

const logout = () => async dispatch => {
	try {
		await AsyncStorage.removeItem('@ConsumerUserInfo');
		return dispatch({
			type: 'LOGOUT',
		});
	} catch (error) {
		throw error; // error should be logged to sentry
	}
};

export { logout };
