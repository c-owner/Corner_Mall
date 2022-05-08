import React from "react";
import "./main.css";
import axios from "axios";
import {Link} from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {API_URL} from "../config/constants";
import {Carousel, message} from 'antd';

dayjs.extend(relativeTime);

function MainPage() {
    const [products, setProducts] = React.useState([]);
    const [banners, setBanners] = React.useState([]);
    React.useEffect(function () {
        axios
            .get(`${API_URL}/products`)
            .then(function (result) {
                const products = result.data.products;
                setProducts(products);
            })
            .catch(function (error) {
                console.error("에러 발생 : ", error);
            });
        axios.get(`${API_URL}/banners`).then((result) => {
            const banners = result.data.banners;
            setBanners(banners);
        }).catch((error) => {
            message.error("에러가 발생하였습니다." + error);
        });
    }, []);

    //-
    return (
        <div>
            <div className="banner-container">
                <Carousel autoplay autoplaySpeed={3000}>
                    {
                        banners.map((banner, index) => {
                            return (
                                <Link to={banner.href}>
                                    <div id="banner">
                                        <img src={`${API_URL}/${banner.imageUrl}`} alt=""/>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </Carousel>
            </div>
            <div className="content">

                <h1 id="product-headline">판매되는 상품들</h1>
                <div id="product-list">
                    {products.map(function (product, index) {
                        return (
                            <div className="product-card">
                                {
                                    product.soldout === 1 && <div className="product-blur">
                                        <div class="soldout">SOLDOUT</div>
                                    </div>
                                }
                                <Link
                                    style={{color: "inherit"}}
                                    className="product-link"
                                    to={`/products/${product.id}`}
                                >
                                    <div>
                                        <img className="product-img" src={API_URL + "/" + product.imageUrl}/>
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}원</span>
                                        <div className="product-footer">
                                            <div className="product-seller">
                                                <img
                                                    className="product-avatar"
                                                    src="images/icons/avatar.png"
                                                />
                                                <span>{product.seller}</span>
                                            </div>
                                            <span className="product-date">{dayjs(product.createdAt).fromNow()}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
