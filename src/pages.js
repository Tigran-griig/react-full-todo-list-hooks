import {FirebaseState} from "./Context/firebase/FirebaseState";
import {AlertState} from "./Context/alert/AlertState";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./Components/Navbar";
import {Alert} from "./Components/Alert";
import {Home} from "./Pages/Home";
import {AboutMe} from "./Pages/AboutMe";
import React from "react";

export const Pages =()=>{
    return(
        <FirebaseState>
            <AlertState>
                <BrowserRouter>

                    <Navbar />
                    <div className="container pt-4">
                        <Alert />
                        <Switch>
                            <Route path={"/"} exact component={Home} />
                            <Route path={"/aboutme"} component={AboutMe} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    )
}