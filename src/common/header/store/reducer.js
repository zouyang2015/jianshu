import * as actionTypes from './constants'
import { fromJS } from 'immutable' // immutable库生成immutable对象，不可更改

// 1. immutable
const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 0,
	totalPage: 1
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_FOCUS:
			// 3. immutable set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
			return state.set('focused', true)
		case actionTypes.SEARCH_BLUR:
			return state.set('focused', false)
		case actionTypes.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			})
		case actionTypes.MOUSE_ENTER:
			return state.set('mouseIn', true)
		case actionTypes.MOUSE_LEAVE:
			return state.set('mouseIn', false)
		case actionTypes.CHANGE_PAGE:
			return state.set('page', action.page)
		default:
			return state
	}
}
