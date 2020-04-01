import React from "react";
import { connect } from "react-redux";

class ReduxCounter extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "300px",
          margin: "50px auto",
          border: "1px solid black",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <h2>Redux Counter</h2>
        <h3>Count: {this.props.cnt}</h3>
        <button onClick={this.props.addCount}>Add</button>
        <button onClick={this.props.subCount}>Sub</button><br/>
        <button onClick={() => this.props.addNum(25)}>Add 25</button>
        <button onClick={() => this.props.subNum(13)}>Sub 13</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cnt: state.counterReducer.counter
  };
}

function mapDispatchToProps(dispatch){
    return {
        addCount: () => dispatch({type:'ADD'}),
        subCount: () => dispatch({type:'SUB'}),
        addNum: num => dispatch({type:'ADD_N',num}),
        subNum: num => dispatch({type:'SUB_N',num})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
