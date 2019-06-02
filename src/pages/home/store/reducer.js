// import * as actionTypes from './constants'
import { fromJS } from 'immutable' // immutable库生成immutable对象，不可更改

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl:'//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp0'
	},{
		id: 2,
		title: '手绘',
		imgUrl:'//upload.jianshu.io/collections/images/39/332293730045332541.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
	}]
})

export default (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state
	}
}
