import { editBook, postBook, getBookById } from '../apis/book'

export function setBooks(books) {
  return {
    type: 'SET_BOOKS',
    payload: books,
  }
}

export function addBook(books) {
  return {
    type: 'ADD_BOOKS',
    payload: books,
  }
}

export function updateBooks(books) {
  return {
    type: 'UPDATE_BOOKS',
    payload: books,
  }
}

export function deleteBooks(books) {
  return {
    type: 'DELETE_BOOKS',
    payload: books,
  }
}

export function fetchBook(id) {
  return (dispatch) => {
    return getBookById(id)
      .then((bookResult) => {
        dispatch(setBooks(bookResult))
      })
      .catch((err) => console.error(err.message))
  }
}
export function submitBook(newBook) {
  return (dispatch) => {
    return postBook(newBook)
      .then((newBookData) => {
        dispatch(addBook(newBookData))
      })
      .catch((err) => console.error(err.message))
  }
}

export function updateBook(newBook) {
  return (dispatch) => {
    return editBook(newBook)
      .then((newBookData) => {
        dispatch(updateBooks(newBookData))
      })
      .catch((err) => console.error(err.message))
  }
}
