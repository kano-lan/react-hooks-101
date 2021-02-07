import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Event from "./Event";
import Events from "./Events";
import reducer from "../reducers";
import EventForm from "./EventForm";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>
    </div>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
