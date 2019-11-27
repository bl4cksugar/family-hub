import cookie from 'vue-cookie';

const TOKEN = "token";

let defaultParams = {
	expires: '8h',
};

let testCookie = {};

export default {
	setTokenCookie(token) {
		cookie.set(TOKEN, token, defaultParams);
	},
	getTokenCookie() {
		// return cookie.get(TOKEN);
		testCookie.isAdmin = true;
		return null
	},
	deleteTokenCookie() {
		// var date = new Date();
		// cookie.set(TOKEN, "", {
		// 	expires: date.getDate() - 10
		// });
		// cookie.delete(TOKEN);
		testCookie = {};
	},
	hasTokenCookie() {
		if (cookie.get(TOKEN))
			return true;
		return false;
	},
}