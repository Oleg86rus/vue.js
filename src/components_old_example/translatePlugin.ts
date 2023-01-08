export default {
	install(app, options) {
		let current = 'ru'
		const changeLang = () => {
			current = current === 'ru' ? 'en' : 'ru'
		}
		
		app.config.globalProperties.$alert = text => {
			window.alert(text)
		}
		
		app.config.globalProperties.$i18n = key => {
			//app.title -> [app, title]
			return key.split('.').reduce((words, k) => {
				return words[k] || '==== UNKNOWN ===='
			}, options[current])
		}
		
		app.provide('changeI18nLang', changeLang)
	}
}