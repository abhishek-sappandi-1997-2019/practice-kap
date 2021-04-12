import axios from 'axios'

export const get = (books) =>{
    return {type:'GET_BOOKS' ,payload:books}
}
export const add = (book) =>{
    console.log(book);
    return {type:'ADD_BOOK' ,payload:book}
}

export const startGetbooks = () =>{
    return (dispatch) =>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
        .then((response)=>{
            const books = response.data.items
            books && dispatch(get(books))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}   