import "./index.css";
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(
        function () {
            axios.get('https://644cc84a-ae0f-48c0-a6b9-7a52be885cb2.mock.pstmn.io/products').then(function (result) {
                const products = result.data.products;
                setProducts(products);
            }).catch(function (err) {
                console.log(err);
            });
        }, []);

    if (products === null) {
        return <h1>상품 정보를 가져오고 있습니다..</h1>
    }

    return (
        <div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt=""/>
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {
                        products.map(function (item, p_idx) {
                            return (
                                <div className="product-card">
                                    <Link className={"product-link"} to={`/product/${item.id}`}>
                                        <div>
                                            <img className="product-img" src={item.imageUrl} alt=""/>
                                        </div>
                                        <div className={"product-contents"}>
                                            <span className="product-name">{item.name}</span>
                                            <span className="product-price">{item.price}원</span>
                                            <div className="product-seller">
                                                <img className="product-avatar" src="images/icons/avatar.png" alt=""/>
                                                <span>{item.seller}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default MainPage;
