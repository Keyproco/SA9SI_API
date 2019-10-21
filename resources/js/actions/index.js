import { CHANGE_AUTH } from './types';
//test
export function changeAuth(isLogged) {
	return {
		type: CHANGE_AUTH,
		payload: isLogged
	};
}
