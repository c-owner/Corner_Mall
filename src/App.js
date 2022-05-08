import "antd/dist/antd.min.css";
import "./App.css";
import MainPageComponent from "./main/main";
import {Switch, Route, Link, useHistory, useLocation} from "react-router-dom";
import UploadPage from "./upload/upload";
import ProductPage from "./product/product";
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
import {useEffect} from "react";
import UpdatePage from "./product_update/update";

function App() {
    const history = useHistory();
    let location = useLocation();
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <Link to="/">
                        <img src="/images/icons/logo.png" alt=""/>
                    </Link>
                    {
                        location.pathname === '/upload' ?
                            <span></span> :
                            <Button
                                size="large"
                                onClick={function () {
                                    history.push("/upload");
                                }}
                                icon={<DownloadOutlined/>}
                            >
                                상품 등록
                            </Button>
                    }
                </div>
            </div>
            <div id="body">
                <Switch>
                    <Route exact={true} path="/">
                        <MainPageComponent/>
                    </Route>
                    <Route exact={true} path="/products/:id">
                        <ProductPage/>
                    </Route>
                    <Route exact={true} path="/products/:id/update">
                        <UpdatePage/>
                    </Route>
                    <Route exact={true} path="/upload">
                        <UploadPage/>
                    </Route>
                </Switch>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default App;
