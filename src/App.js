import './App.css';
import MainPage from "./main";
import {Switch, Route, Link} from 'react-router-dom';
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
                    <Link className="product-link" to={"/"}>
                    <img src="/images/icons/logo.png" alt=""/>
                    </Link>
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
