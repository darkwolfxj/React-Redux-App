import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./App.css";
import { rootReducer } from "./reducers/";
import Data from "./components/data";

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
    return (
        <Provider store={ store }>
        <div className="center white-text grey">
            Random Coding Jokes         
        </div>
        <Data />
        </Provider>
    )
}


export default App
