import "./index.css";
import axios from "axios";
import React from "react";

function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(
        function() {
            axios.get('https://644cc84a-ae0f-48c0-a6b9-7a52be885cb2.mock.pstmn.io/products').then(function (result) {
                const products = result.data.products;
                setProducts(products);
            }).catch(function (err) {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png"/>
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png"/>
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {
                        products.map(function (product, index) {
                            return (
                                <div className="product-card">
                                    <div>
                                        <img className="product-img" src={product.imageUrl}/>
                                    </div>
                                    <div className={"product-contents"}>
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}원</span>
                                        <div className="product-seller">
                                            <img className="product-avatar" src={product.imageUrl}/>
                                            <span>{product.seller}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div id="footer">

                </div>
            </div>
        </div>
    );
}

export default MainPage;
