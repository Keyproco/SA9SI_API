import { CHANGE_AUTH } from '../actions/types';
import axios from 'axios';
export default function(state = true, action) {
	switch (action.type) {
		case CHANGE_AUTH:
			return action.payload;
		default:
			return state;
	}
}

// axios
// 	.post('/api/login', action.payload)
// 	.then((r) => {
// 		console.log(r.data.acess_token);
// 		localStorage.setItem('token', r.data.acess_token);

// 		return true;
// 	})
// 	.catch((e) => console.log(e));
