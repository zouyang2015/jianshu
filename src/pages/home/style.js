import styled from 'styled-components'

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`
export const HomeMain = styled.div`
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	float: left;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`

export const HomeSub = styled.div`
	width: 240px;
	float: right;
	padding-top: 30px;
`

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
`
export const TopicItem = styled.div`
	float: left;
	background: #F7F7F7;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	padding-right: 10px;
	margin-left: 18px;
	margin-top: 10px;
	&:first-of-type {
		margin-left: 0;
	}
	.topic-pic {
		float: left;
		width: 32px;
		height: 32px;
		border-radius: 0 0 4px 4px;
		margin-right: 10px;
	}
`
