import { fromJS } from 'immutable' // immutable库生成immutable对象，不可更改
import * as constants from './constants'

const defaultState = fromJS({
	title: '',
	content: ''
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content
			})
		default:
			return state
	}
}
