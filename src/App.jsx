import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Context } from "./pages/Context"
import { Effect } from "./pages/Effect"
import { Reducer } from "./pages/Reducer"
import { Ref } from "./pages/Ref"
import { State } from "./pages/State"
import { StateAndEffect } from "./pages/StateAndEffect"
import { Redux } from "./pages/Redux"

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/stateAndEffect'>
                    <StateAndEffect />
                </Route>
                <Route path='/state'>
                    <State />
                </Route>
                <Route path='/effect'>
                    <Effect />
                </Route>
                <Route path='/context'>
                    <Context />
                </Route>
                <Route path='/ref'>
                    <Ref />
                </Route>
                <Route path='/reducer'>
                    <Reducer />
                </Route>
                <Route path='/redux'>
                    <Redux />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App