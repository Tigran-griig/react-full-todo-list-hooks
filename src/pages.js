import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutMe } from "./Pages/AboutMe";
import { Navbar } from "./Components/Navbar";
import { Alert } from "./Components/Alert";
import { AlertState } from "./Context/alert/AlertState";
import { FirebaseState } from "./Context/firebase/FirebaseState";
function Pages() {
    return (
        <>

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
        </>
    );

}

export default Pages;