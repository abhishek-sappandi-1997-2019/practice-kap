import React, { Component } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiFileEditLine } from 'react-icons/ri'
import { ImBooks } from 'react-icons/im'
import { withRouter } from 'react-router-dom'

class Drawer extends Component {

    /**
     * handler to tooggle drawer
     */
    handleClick = () => {
        this.props.handleChange()
    }

    /**
     * 
     * @param {handler for dropdown} event 
     */
    handleSelect = (event) => {
        if (event.target.value === 'overview') {
            this.props.history.push('/overview')
        }
    }

    /**
     * handler for dropdown
     */
    handleChangeCourse = () => {
        this.props.history.push('/overview')
    }

    render() {
        return (
            <div className="drawer">
                <div className='header-menu'>
                    <GiHamburgerMenu onClick={this.handleClick} size='24' />
                    {this.props.bool && <label>Menu</label>}<br />
                </div>

                <div className='header-menu'>
                    <RiFileEditLine size='24' />

                    {this.props.bool &&
                        <select onClick={this.handleSelect}>
                            <option value='CONTENT MANAGMENT' selected>CONTENT MANAGMENT</option>
                            <option value='overview'>overview</option>
                        </select>
                    }
                </div>

                <div className='header-menu'>
                    <ImBooks size='24' />
                    {this.props.bool && <label onClick={this.handleChangeCourse}>COURSES</label>}
                </div>
            </div>
        )
    }
}
export default withRouter(Drawer)