import React, {PropTypes} from 'react';

const BookDetails = ({book, addToCart}) => {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{book.title}</h4>
          <ul>
            <li><stron>Author: </stron> {book.author}</li>
            <li><stron>Price: </stron> ${book.price}</li>
            <li><stron>Year: </stron> {book.year}</li>
            <br/>
            {/* onClick event */}
            <button className="btn btn-primary" onClick={e => addToCart(book)}>Buy</button>
          </ul>
        </div>
      </div>
    );
};

// const BookDetails = (props) => {
//   console.log(props.book);
//   return (
//     <div>
//       { props.book.id ?
//       <div className="media">
//         <div className="media-left">
//           <a href="#">
//             <img className="media-object" src="http://placehold.it/200/450" alt="Placehold" />
//           </a>
//         </div>
//         <div className="media-body">
//           <h4 className="media-heading">{props.book.title}</h4>
//           <ul>
//             <li><strong>Author: </strong>{props.book.author}</li>
//             <li><strong>Price: </strong>${props.book.price}</li>
//             <li><strong>Year: </strong>{props.book.year}</li>
//             <br/>
//             <button className="btn btn-primary">Buy</button>
//           </ul>
//         </div>
//       </div>
//       : <div>loading</div> }
//     </div>
//   );
// };

export default BookDetails;
