import {useParams} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from "react";
import "./product.css";
import {API_URL} from "../config/constants";
import dayjs from "dayjs";
import {Button, message} from "antd";

function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = () => {
        axios
            .get(
                `${API_URL}/products/${id}`
            )
            .then(function (result) {
                setProduct(result.data.product);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    useEffect(function () {
        getProduct();
    }, []);

    if (product === null) {
        return <h1>상품 정보를 받고 있습니다...</h1>;
    }

    const onPurchase = () => {
        axios.post(`${API_URL}/purchase/${id}`).then((res) => {
            message.info("구매가 완료되었습니다.");
            getProduct();
        }).catch((err) => {
            console.log(err);
            message.error('해당 상품을 구매할 수 없습니다. : ', err.message);
        });
    }

    return (
        <div>
            <div className="update-btn-wrap">
                <Button className="update-btn" size="large" type="primary">
                    상품 수정
                </Button>
            </div>
            <div id="image-box">
                {
                    product.soldout === 1 && <div className="product-blur">
                        <div class="soldout">SOLDOUT</div>
                    </div>
                }
                <img src={`${API_URL}/${product.imageUrl}`}/>
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png"/>
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="createdAt">{dayjs(product.createdAt).format('YYYY년 MM월 DD일 HH:MM')}</div>
                <Button className="purchase-button"
                        onClick={onPurchase}
                        disabled={product.soldout === 1}
                        size="large" type="primary" danger>
                    구매하기
                </Button>
                {/* 줄바꿈 텍스트를 그대로 바꾸기 위해서 pre태그로 사용 */}
                <pre id="description">{product.description} </pre>
            </div>
        </div>
    );
}

export default ProductPage;
