import './App.css';
import MainPage from "./main";
import {Switch, Route} from 'react-router-dom';
import ProductPage from "./product";
import UploadPage from "./upload";
import React from "react";

function App() {
    return (
        <div>
            {/*<Route exact path={"/"} component={MainPage} />*/}
            {/*<Route exact path={"/product/:id"} component={ProductPage} />*/}
            {/*<Route exact path={"/upload"} component={UploadPage} />*/}
            <div id="header">
                <div id="header-area">
                    <img src="/images/icons/logo.png" alt=""/>
                </div>
            </div>
            <Switch>
                <Route exact path={"/"}>
                    <MainPage/>
                </Route>
                <Route exact path={"/product/:id"}>
                    <ProductPage/>
                </Route>
                <Route exact path={"/upload"}>
                    <UploadPage/>
                </Route>
            </Switch>
            <div id="footer">

            </div>
        </div>
    );
}

export default App;
