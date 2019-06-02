import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import { Iconfont } from './statics/iconfont/iconfont'
import store from './store'

import Header from './common/header'

import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Fragment>
		<Provider store={store}>
			<GlobalStyle />
			<Iconfont />
			<Header />
			<BrowserRouter>
				<Route path="/" exact component={Home}></Route>
				<Route path="/detail" exact component={Detail}></Route>
			</BrowserRouter>
		</Provider>
    </Fragment>
  );
}

export default App;
