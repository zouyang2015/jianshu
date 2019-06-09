import axios from 'axios'
import * as constants from './constants'

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
})

const addHomeList = (result, nextPage) => ({
	type: constants.ADD_HOME_LIST,
	list: result.list,
	nextPage
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json')
			.then(res => {
				const result = res.data.data
				dispatch(changeHomeData(result))
			})
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get(`/api/homeList.json?page=${page}`)
			.then(res => {
				const result = res.data.data
				dispatch(addHomeList(result, page + 1))
			})
	}
}

export const toggleTopShow = (value) => ({
	type: constants.CHANGE_SCROLL,
	value: value
})
