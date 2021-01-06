import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import ComparatorView from "./views/ComparatorView";
import LoginView from "./views/LoginView";

const App = () =>  {

    return (
        <Router>
            <Route exact path="/">
                <LoginView />
            </Route>
            <Route exact path="/comparator">
                <ComparatorView />
            </Route>
        </Router>
    );
}

export default App;
