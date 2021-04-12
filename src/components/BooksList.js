import React, { Component } from 'react'
import { startGetbooks } from '../actions/bookAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { GiAtomicSlashes } from 'react-icons/gi'
import '../App.css'

class BooksList extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    /**
     * method to get the data
     */
    componentDidMount() {
        if (this.props.books.length === 0) {
            this.props.dispatch(startGetbooks())
        }
    }

    /**
     * 
     * @param {handler to input field} e 
     */
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    /**
     * 
     * @returns function to filter title and author
     */
    filterBooks = () => {
        if (this.props.books[0].volumeInfo) {
            if (this.props.books[0].volumeInfo.title) {
                return (this.props.books.filter(ele => ele.volumeInfo.title.toLowerCase().includes(this.state.search.toLowerCase())))
            }
            else if (this.props.books[0].volumeInfo.authors[0]) {
                return (this.props.books.filter(ele => ele.volumeInfo.authors[0].toLowerCase().includes(this.state.search.toLowerCase())))
            }
            else {
                return this.props.books
            }
        }
        else {
            return this.props.books
        }
    }


    render() {
        return (
            <div className='booklist'>
                <h2>
                    <GiAtomicSlashes className='header' size='38'/>{' '}
                    <small className='header'>atom</small>
                </h2>
                <div className='header-title'>
                    <h4 style={{ fontWeight: 'bolder' }}>Books</h4>
                    <Link to="/add">
                        <button className="btn btn-primary" size="sm">
                            create new book
                        </button>
                    </Link>

                </div>
                <input
                    type="text"
                    className="search-input"
                    name="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleChange}
                /><br /><br />
                { this.props.books.length > 0 && <h6 style={{ fontWeight: 'bolder' }}>All Books - {(this.filterBooks()).length}</h6>}
                <br />
                {
                    this.props.books.length > 0 ? (
                        (this.filterBooks()).map((ele, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="column">
                                        <div className="card ">
                                            <h5>{ele.volumeInfo.title} </h5>
                                            <p>Authors:{ele.volumeInfo.authors[0]}</p>
                                            <p>publisher:{ele.volumeInfo.publisher ? ele.volumeInfo.publisher : " NA"}</p>
                                            <p>Published Date:{ele.volumeInfo.publishedDate}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : <h1>Loading...</h1>
                }
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        books: store.books
    }
}

export default connect(mapStateToProps)(BooksList)