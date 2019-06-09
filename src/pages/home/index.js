import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'

import {
	HomeWrapper,
	HomeMain,
	HomeSub,
	BackTop
} from './style'

class Home extends PureComponent {

	handleScrollTop () {
		window.scrollTo(0, 0)
	}

	render() {
		let { showScroll } = this.props
		return (
			<HomeWrapper>
				<HomeMain>
					<img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
					<Topic/>
					<List/>
				</HomeMain>
				<HomeSub>
					<Recommend/>
					<Writer/>
				</HomeSub>
				{
					showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null
				}
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData()
		this.bindEvents()
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow)
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow)
	}
}

const imapStateToProps = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
	changeHomeData(action) {
		dispatch(actionCreators.getHomeInfo())
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		} else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
})

export default connect(imapStateToProps, mapDispatchToProps)(Home)
