import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Write extends PureComponent {
	render() {
		const { loginData } = this.props

		if (loginData) {
			return (
				<div>Write</div>
			)
		} else {
			return <Redirect to='/login' />
		}
	}
}

const mapState = (state) => ({
	loginData: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write)
