import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class CartPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount(){
    this.props.fetchCart();
  }

  render() {
    return (
      <div>
        { this.props.items ?
          <div>
            <h1>Cart Page</h1>
            <table className="table">
              <tbody>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                </tr>
                {this.props.items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        : <div>loading</div> }

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(bookActions.fetchCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
