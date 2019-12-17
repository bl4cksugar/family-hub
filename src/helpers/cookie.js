import cookie from 'vue-cookie';

const TOKEN = "token";

let defaultParams = {
	expires: '8h',
};


export default {
	setTokenCookie(token) {
		cookie.set(TOKEN, token, defaultParams);
	},
	getTokenCookie() {
		return cookie.get(TOKEN);
	},
	deleteTokenCookie() {
		var date = new Date();
		cookie.set(TOKEN, "", {
			expires: date.getDate() - 10
		});
		cookie.delete(TOKEN);
	},
	hasTokenCookie() {
		if (cookie.get(TOKEN))
			return true;
		return false;
	},
}