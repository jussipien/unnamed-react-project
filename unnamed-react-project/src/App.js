import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'
import Screen from './components/Screen'
import './sass/styles.scss'

export default () => (
  <> 
    <Provider store={store}>
      <Router>
        <div className={"screen"}>
          <div className={"main-block"}>
            <Header/>
            <Route exact path="/" render={() => <Screen title={'Main title here'} text={"Some text here."} message={"Success!"} type={"success"} />} />
            <Route exact path="/another" render={() => <Screen title={'Another title here'} text={"Another text here."}  message={"Warning!"} type={"warning"} />} />
            <Route exact path="/lorem" render={() => <Screen title={'Lorem'} text={"Ipsum."}  message={"Error!"} type={"error"} />} />
          </div>
          <div className={"weird-spinner"} />
        </div>
        </Router>
    </Provider>
  </>
);
