import { CHANGE_AUTH } from './types';

export function changeAuth(isLogged) {
	return {
		type: CHANGE_AUTH,
		payload: isLogged
	};
}
