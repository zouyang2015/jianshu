import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { Iconfont } from './statics/iconfont/iconfont'
import store from './store'

import Header from './common/header'

function App() {
  return (
    <Fragment>
			<Provider store={store}>
				<GlobalStyle />
				<Iconfont />
				<Header />
			</Provider>
    </Fragment>
  );
}

export default App;
