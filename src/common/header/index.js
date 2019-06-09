import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	Addition,
	Button
} from './style'

class Header extends PureComponent {
	render() {
		const { handleInputFocus, handleInoutBlur, focused, list, login, logout } = this.props
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						login ?
							<NavItem onClick={logout} className='right'>退出</NavItem> :
							<Link to="/login">
								<NavItem className='right'>登录</NavItem>
							</Link>
					}
					<NavItem className='right'>
						<span className="iconfont">&#xe636;</span>
					</NavItem>
					<SearchWrapper>
						<CSSTransition timeout={200} in={focused} classNames="slide">
							<NavSearch
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInoutBlur}
								className={focused ? 'focused' : ''}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe64d;</i>
						{ this.getListArea() }
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to="/write">
						<Button className='writting'><span className="iconfont">&#xe678;</span>写文章</Button>
					</Link>
					<Link to="/login">
						<Button className='reg'>注册</Button>
					</Link>
				</Addition>
			</HeaderWrapper>
		)
	}

	getListArea () {
		const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
		const jsList = list.toJS()
		const pageList = []

		if (jsList.length) {
			for(let i = page * 10; i < (page + 1) * 10; i++) {
				if (jsList[i]) {
					pageList.push(
						<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
					)
				}
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
							<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
							换一换
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<div>
						{ pageList }
					</div>
				</SearchInfo>
			)
		}
		return null
	}
}

const mapStateToProps = (state) => {
	return {
		// 2. immutable
		focused: state.getIn(['header', 'focused']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		login: state.getIn(['login', 'login'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			!list.size && dispatch(actionCreators.getList())
			dispatch(actionCreators.searchFocus())
		},
		handleInoutBlur() {
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
			if (originAngle) {
				originAngle = parseInt(originAngle, 10)
			} else {
				originAngle =  0
			}
			spin.style.transform = `rotate(${360 + originAngle}deg)`
			if (page + 1 < totalPage) {
				dispatch(actionCreators.changePage(page + 1))
			} else {
				dispatch(actionCreators.changePage(0))
			}
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
