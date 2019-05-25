import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button
} from './style'

const Header = (props) => {
	return (
		<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				<NavItem className='right'>登录</NavItem>
				<NavItem className='right'>
					<span className="iconfont">&#xe636;</span>
				</NavItem>
				<SearchWrapper>
					<CSSTransition timeout={200} in={props.focused} classNames="slide">
						<NavSearch
							onFocus={props.handleInputFocus}
							onBlur={props.handleInoutBlur}
							className={props.focused ? 'focused' : ''}
						></NavSearch>
					</CSSTransition>
					<span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</span>
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className='writting'><span className="iconfont">&#xe678;</span>写文章</Button>
				<Button className='reg'>注册</Button>
			</Addition>
		</HeaderWrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		// 2. immutable
		focused: state.header.get('focused')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus())
		},
		handleInoutBlur() {
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
