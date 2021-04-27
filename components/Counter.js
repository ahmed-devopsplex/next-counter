import React from "react";
import { connect } from "react-redux";
import {
  increase_clicked,
  decrease_clicked,
  reset,
} from "../redux/actions/counterActions";

function Counter(props) {
  const { counter, warning } = props;
  return (
    <div>
      {warning && (
        <div style={{ padding: "0.5rem", color: "red" }}>{warning}</div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <button onClick={() => props.increase_clicked()}>INCREASE</button>
        <div style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
          {counter}
        </div>
        <button onClick={() => props.decrease_clicked()}>DECREASE</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => props.reset()}>RESET</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  warning: state.counter.warning,
});

export default connect(mapStateToProps, {
  increase_clicked,
  decrease_clicked,
  reset,
})(Counter);
