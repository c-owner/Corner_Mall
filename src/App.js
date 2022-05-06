import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import MainPage from "./main";
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import ProductPage from "./product";
import UploadPage from "./upload";
import React from "react";
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";

function App() {
    const history = useHistory();
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
                    <Button size="large" onClick={function() {
                        history.push('/upload');
                    }} icon={<DownloadOutlined />}>
                        상품 업로드
                    </Button>
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
