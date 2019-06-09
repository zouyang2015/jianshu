// import * as actionTypes from './constants'
import { fromJS } from 'immutable' // immutable库生成immutable对象，不可更改
import * as constants from './constants'

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false
})

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	})
}

const addHomeList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(fromJS(action.list)),
		'articlePage': action.nextPage
	})
}

const changeScroll = (state, action) => {
	return state.set('showScroll', action.value)
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action)
		case constants.ADD_HOME_LIST:
			return addHomeList(state, action)
		case constants.CHANGE_SCROLL:
			return changeScroll(state, action)
		default:
			return state
	}
}
