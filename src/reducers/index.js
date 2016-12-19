// Set up your root reducer here...
import { combineReducers } from 'redux';
import { booksReducer, bookReducer } from './bookReducers';
import cart from './cartReducers';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  cart
});
// es6 syntax allows for just `cart` as long as both names are same eg. cart: cart
