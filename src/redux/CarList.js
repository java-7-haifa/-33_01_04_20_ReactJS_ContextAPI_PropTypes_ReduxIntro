import React from "react";
import {connect} from 'react-redux';

class CarList extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "300px",
          margin: "0 auto",
          border: "1px solid black",
          padding: "10px"
        }}
      >
        <ul>
          {this.props.cars.map((c, i) => (
            <li key={i}>
              {`Model: ${c.model} price: ${c.price} USD`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        cars: state.carReducer.cars
    }
}

export default connect(mapStateToProps)(CarList);
