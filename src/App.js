import './App.css';
import MainPage from "./main";
import {Switch, Route} from 'react-router-dom';
import ProductPage from "./product";
import UploadPage from "./upload";

function App() {
    return (
        <div>
            <Switch>
                {/* exact를 true 하지 않으면 컴포넌트가 아래 템플릿에 덧붙여 보임 */}
                <Route exact={true} path={"/"}>
                    <MainPage/>
                </Route>
                <Route exact={true} path={"/product/:id"}>
                    <ProductPage/>
                </Route>
                <Route exact={true} path={"/upload"}>
                    <UploadPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
