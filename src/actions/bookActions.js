import Axios from 'axios';

// API URL
const apiUrl = 'http://5847a0fbb0079b1200891197.mockapi.io/Book';

// Sync Actions
const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  };
};

const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  };
};

const fetchBookByIdSuccess = (book) => {
  return {
    type: 'FETCH_BOOK_BY_ID_SUCCESS',
    book
  }
};

const addToCartSuccess = (item) => {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    item
  }
};

export const fetchCartSuccess = (items) => {
  return {
    type: 'FETCH_CART_SUCCESS',
    items
  }
};

//Async Actions
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' + bookId)
      .then(response => {
        // Handle data with sync action
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addToCart = (item) => {
  return (dispatch) => {
    return Axios.post('http://5847a0fbb0079b1200891197.mockapi.io/Cart', item)
      .then(response => {
        dispatch(addToCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get('http://5847a0fbb0079b1200891197.mockapi.io/Cart')
      .then(response => {
        dispatch(fetchCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
