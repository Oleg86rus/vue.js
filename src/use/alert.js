import {ref} from 'vue'

export function useAlert(visiability = false) {
	const alert = ref(visiability)
	
	const toggle = () => alert.value = !alert.value
	const close = () => alert.value = false
	
	return {alert, toggle, close}
}