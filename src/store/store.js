import {createStore, createLogger} from 'vuex'
import counterModule from './modules/counter.js'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
	plugins: [createLogger()],
	modules: {
		count: counterModule
	},
	state() {
		return {
			appTitle: 'Vuex Working!'
		}
	},
	getters: {
		uppercaseTitle(state) {
			return state.appTitle.toUpperCase()
		}
	},
	mutations: mutations,
	actions: actions
})