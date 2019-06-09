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
	width: 280px;
	float: right;
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

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #cccccc;
	.pic {
		float: right;
		width: 150px;
		margin-left: 20px;
	}
`
export const ListInfo = styled.div`
	h3 {
		font-size: 18px;
		color: #333;
	}
	p {
		font-size: 13px;
		color: #999;
		line-height: 24px;
		padding-top: 10px;
	}
`
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #A5A5A5;
	text-align: center;
	border-radius: 20px;
	color: #FFFFFF
`

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: 280px 50px;
	margin-top: -5px;
	margin-bottom: 10px;
`

export const WriterWrapper = styled.div`
	height: 300px;
	text-align: center;
	border: 1px solid #cccccc;
`

export const BackTop = styled.div`
	position: fixed;
	right: 20px;
	bottom: 20px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #CCCCCC;
	
`
