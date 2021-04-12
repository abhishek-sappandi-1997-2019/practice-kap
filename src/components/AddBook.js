import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { add } from '../actions/bookAction'
import { connect } from 'react-redux'
import '../App.css'

class AddBook extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            author: '',
            publisher: '',
            publishedDate: '',
            book_url: '',
            submit: false
        }
    }

    /**
     * 
     * @param {handler for input fields} e 
     */
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    /**
     * 
     * @param {hanlder for validation} data 
     * @returns 
     */
    validation = (data) => {
        return (this.state.submit && data.length === 0) && <small style={{ 'color': 'red' }}>*field is required</small>
    }

    /**
     * 
     * @param {hanlder for submit} e 
     */
    handleSubmit = (e) => {
        e.preventDefault()
        const { title, author, publisher, publishedDate, book_url } = this.state
        let authors = [author]
        const obj = { volumeInfo: { title, authors, publisher, publishedDate, book_url } }
        this.setState({ submit: true })
        if (obj.volumeInfo.title && obj.volumeInfo.authors && obj.volumeInfo.publisher && obj.volumeInfo.publishedDate && obj.volumeInfo.book_url) {
            console.log("obj", obj);
            this.props.dispatch(add(obj))
            this.props.history.push('/')
            window.alert('post created sucessfully..!')
        }
    }

    render() {
        return (
            <div className='align-form'>
                <br />
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="title-id" className="form-label">Enter Title</label>
                    <input
                        type='text'
                        id='title-id'
                        className="form-control"
                        name="title"
                        placeholder='enter title'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />{this.validation(this.state.title)}
                    <br />

                    <label htmlFor="author-id" className="form-label">Enter Author</label>
                    <input
                        type='text'
                        name="author"
                        id='author-id'
                        className="form-control"
                        placeholder='enter author'
                        value={this.state.author}
                        onChange={this.handleChange}
                    />{this.validation(this.state.author)}
                    <br />

                    <label htmlFor="publisher-id" className="form-label">Enter Publisher</label>
                    <input
                        type='text'
                        id='publisher-id'
                        name="publisher"
                        className="form-control"
                        placeholder='enter publisher'
                        value={this.state.publisher}
                        onChange={this.handleChange}
                    />{this.validation(this.state.publisher)}
                    <br />

                    <label htmlFor="date-id" className="form-label">Enter Date</label>
                    <input
                        type='date'
                        id='date-id'
                        className="form-control"
                        name="publishedDate"
                        value={this.state.publishedDate}
                        onChange={this.handleChange}
                    />{this.validation(this.state.publishedDate)}
                    <br />

                    <label htmlFor="book-url" className="form-label">Enter URL</label>
                    <input
                        id='book-url'
                        type='text'
                        name="book_url"
                        className="form-control"
                        placeholder='enter book_url'
                        value={this.state.book_url}
                        onChange={this.handleChange}
                    />{this.validation(this.state.book_url)}
                    <br />

                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button
                            type='submit'
                            className="btn btn-primary"
                            value='create'
                            size="sm"
                        >create</button>{" "}

                        <Link className='link' to={`/`}>
                            <button
                                className="btn btn-primary"
                                size="sm">
                                Back
                        </button></Link>
                    </div>



                </form>
            </div>
        )
    }
}
export default connect()(AddBook)