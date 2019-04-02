const initialState = {
	isAuthenticated: false,
	isOnboarded: false,
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isAuthenticated: true,
			};
		case 'ONBOARD':
			return {
				...state,
				isOnboarded: true,
			};
		case 'LOGOUT':
			return initialState;
		default:
			return state;
	}
};

export { user };
