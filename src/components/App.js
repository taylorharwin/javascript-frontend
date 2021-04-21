import logo from "../logo.svg";
import { incrementCounter } from "../actions/exampleActions";
import { counterSelector } from "../selectors/exampleSelectors";
import { connect } from "react-redux";
import "./App.scss";

export const App = ({ counter, incrementCounter }) => {
  const onIncrement = () => {
    incrementCounter({ amount: 1 });
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Counter: <strong>{counter}</strong>
        </p>
        <p>
          <button type="button" onClick={onIncrement}>
            Increment
          </button>
        </p>
      </header>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  counter: counterSelector(state, props),
});

const mapDispatchToProps = {
  incrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
