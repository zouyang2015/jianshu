import * as actionTypes from './constants'
import { fromJS } from 'immutable' // immutable库生成immutable对象，不可更改

// 1. immutable
const defaultState = fromJS({
	focused: false
})

export default (state = defaultState, action) => {
	if (action.type === actionTypes.SEARCH_FOCUS) {
		// 3. immutable set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
		return state.set('focused', true)
	}
	if (action.type === actionTypes.SEARCH_BLUR) {
		return state.set('focused', false)
	}
	return state
}
