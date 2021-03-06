import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  z-index: 1;
`

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`

export const SearchWrapper = styled.div`
	float: left;
	position: relative;
	margin-top: 9px;
	margin-left: 20px;
	.zoom {
		position: absolute;
		top: 4px;
		right: 5px;
		font-size: 14px;
		width: 30px;
		height: 30px;
		border-radius: 15px;
		line-height: 30px;
		text-align: center;
		&.focused {
			background: #cccccc;
		}
	}
`

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 35px 0 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		width: 160px;
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;	
	}
	&.slide-exit {
		width: 240px;	
	}
	&.slide-exit-active {
		width: 160px;
		transition: all .2s ease-out;
	}
`

export const SearchInfo = styled.div`
	position: absolute;
	top: 56px;
	left: 0;
	width: 240px;
	padding: 0 20px 20px 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #FFFFFF;
`
export const SearchInfoTitle = styled.div`
	margin: 20px 0 15px 0;
	line-height: 20px;
	color: #969696;
`
export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 12px;
	cursor: pointer;
	.spin {
		display: inline-block;
		font-size: 12px;
		margin-right: 2px;
		transition: all .3s ease-in;
		transform-origin: center center;
	}
`
export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	padding: 5px;
	line-height: 20px;
	font-size: 12px;
	border: 1px solid #dddddd;
	color: #777777;
	border-radius: 2px;
	margin: 5px 5px 0 0;
`

export const Addition = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 56px;
`

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 36px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #ffffff;
		background: #ec6149;
	}
`
