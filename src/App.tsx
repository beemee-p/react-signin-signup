import React from "react";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./store";
import { GlobalStyles } from "./styles/global.styles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  );
}

export default App;
