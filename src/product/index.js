import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect, useState} from "react";

function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(
        function () {
            axios.get(`https://644cc84a-ae0f-48c0-a6b9-7a52be885cb2.mock.pstmn.io/products/${id}`).then(function (result) {
                setProduct(result.data);
            }).catch(function (err) {
                console.log(err);
            });
        },[]);

    if (product === null) {
        return <h1>상품 정보를 받고 있습니다...</h1>
    }

    return (
        <div>
            <div id="image-box">
                <img src={`/${product.imageUrl}`} alt="" />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" alt="" />
                <span>{product.seller}</span>
            </div>
            <div id="content-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="createdAt">2022년 5월 6일</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;
