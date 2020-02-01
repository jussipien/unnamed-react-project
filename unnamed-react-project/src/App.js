import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import Header from './components/Header'
import Screen from './components/Screen'
import './sass/styles.scss'

// <Router>
//   <Notification message={notification} />
//   <Route exact path="/" render={() => <AnecdoteList anecdotes={anecdotes}/>}/>
//   <Route exact path="/anecdotes/:id" render={({match}) => <Anecdote anecdote={anecdoteById(match.params.id)}/>}/>
//   <Route path="/about" render={() => <About/>}/>
//   <Route path="/create"render={() => <CreateNewWithRouter addNew={addNew}/>}/>
// </Router>

export default () => (
  <> 
  <Router>
    <div className={"screen"}>
      <div className={"main-block"}>
        <Header/>
        <Route exact path="/" render={() => <Screen title={'Main title here'} text={"Some text here."}/>}/>
        <Route exact path="/another" render={() => <Screen title={'Another title here'} text={"Another text here."}/>}/>
        <Route exact path="/lorem" render={() => <Screen title={'Lorem'} text={"Ipsum."}/>}/>
      </div>
      <div className={"weird-spinner"}/>
    </div>
    </Router>
  </>
);
