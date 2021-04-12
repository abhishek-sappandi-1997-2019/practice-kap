import React, { Component } from 'react'
import Home from './components/Home'
import { Route , Link , BrowserRouter as Router } from 'react-router-dom'
import AddBook from './components/AddBook'
import Overview from './components/Overview'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to='/'/>
                    <Link to='/add'/>
                    <Link to='/overview'/>
                    
                    <Route path='/'  component={Home} exact={true}/>
                    <Route path='/add'  component={AddBook}/>
                    <Route path='/overview' component={Overview} />
                </Router>
            </div>
        )
    }
}
