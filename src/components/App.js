import React, { useEffect, useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

const APP_KEY = 'appWithRedux';

console.log({ AppContext });

const App = () => {
  const appState = localStorage.getItem("APP_KEY");
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState); // 常にstateの更新状況を知れる

  useEffect(() => {
    // 第一引数にcallback、第二引数に監視する状態を指定
    localStorage.setItem("APP_KEY", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
