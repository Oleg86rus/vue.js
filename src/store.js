import { createStore } from 'vuex'

export const store = createStore({
	state() {
		return {
			appTitle: "This os Vuex + Composition"
		}
	},
	getters: {
		appTitle(state) {
			return state.appTitle.trim()
		}
	}
})