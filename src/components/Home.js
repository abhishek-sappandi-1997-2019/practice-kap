import React, { Component } from 'react'
import BooksList from './BooksList'
import Drawer from './Drawer'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            hamberger: false
        }
    }

    /**
     * handler to toggle hamberger
     */
    handleChange = () => {
        this.setState(prev => ({
            hamberger: !prev.hamberger
        }))
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div className={this.state.hamberger ? 'hamberger' : ''}>
                    <Drawer handleChange={this.handleChange} bool={this.state.hamberger} />
                </div>
                <div style={{ width: '-webkit-fill-available' }}><BooksList /></div>
            </div>
        )
    }
}
export default Home