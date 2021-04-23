import React from "react";
import { connect } from "react-redux";

const Count = (props) => {
  return (
    <div>
      {/* {console.log("props", props)} */}
      Count: {props.count}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("state", state); 
  // This function automatically get the reducer state as argument
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Count); //JS composition
// We are sending the return value of the function as the props of this component 
