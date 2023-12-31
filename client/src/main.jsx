// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root")
);
