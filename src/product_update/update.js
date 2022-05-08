import {Button, Divider, Form, Input, InputNumber, message, Upload} from 'antd';
import "./update.css";
import {API_URL} from "../config/constants";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

function UpdatePage() {
    const {id} = useParams();
    const [imageUrl, setImageUrl] = useState(null);
    const [product, setProduct] = useState(null);
    // react hook / useState, useHistory
    const history = useHistory();

    const getProduct = () => {
        axios
            .get(`${API_URL}/products/${id}`)
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
    const onSubmit = (values) => {
        axios.post(`${API_URL}/products/${id}/update`, {
            name: values.name,
            description: values.description,
            seller: values.seller,
            price: parseInt(values.price),
            imageUrl: imageUrl,
        }).then((result) => {
            console.log(result);
            history.replace('/');
        }).catch((error) => {
            console.log(error);
            message.error(`에러가 발생했습니다. ${error.message}`);
        });
    }
    const onChangeImage = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            const resFile = info.file.response;
            const imageUrl = resFile.imageUrl;
            setImageUrl(imageUrl);

        }
    }
    return (<div id="upload-container">
        <Form name="상품 업로드" onFinish={onSubmit}>
            <Form.Item name="upload"
                       label={<div className="upload-label">상품 사진</div>}>
                <Upload
                    name="image"
                    action={`${API_URL}/image`}
                    listType="picture"
                    showUploadList={false}
                    defaultValue={product.imageUrl ? product.imageUrl : null}
                    onChange={onChangeImage}
                >
                    {/*jsx 문법*/}
                    {imageUrl ? <img id="upload-img" src={`${API_URL}/${imageUrl}`} alt=""/> : product.imageUrl ?
                        <img id="upload-img" src={`${API_URL}/${product.imageUrl}`} alt=""/> :
                        <div id="upload-img-placeholder">
                            <img src="/images/icons/camera.png" alt=""/>
                            <span>이미지를 업로드 해주세요.</span>
                        </div>}
                </Upload>
            </Form.Item>
            <Divider/>
            <Form.Item label={<div className="upload-label">판매자 명</div>}
                       name="seller"
                       rules={[{required: true, message: '판매자 이름을 입력해주세요',}]}
            >
                <Input className="upload-name"
                       size="large"
                       defaultValue={product.seller ? product.seller : null}
                       placeholder="이름을 입력해주세요"/>
            </Form.Item>
            <Divider/>
            <Form.Item name="name"
                       label={<div className="upload-label">상품 이름</div>}
                       rules={[{required: true, message: '상품 이름을 입력해주세요'}]}
            >
                <Input className="upload-name"
                       defaultValue={product.name ? product.name : null}
                       size="large"
                       placeholder="상품 이름을 입력해주세요"/>
            </Form.Item>
            <Divider/>
            <Form.Item name="price"
                       label={<div className="upload-label">상품 가격</div>}
                       rules={[{required: true, message: '상품 가격을 입력해주세요'}]}
            >
                <InputNumber className="upload-name"
                             defaultValue={product.price ? product.price : 0}
                             size="large"
                             placeholder="상품 가격을 입력해주세요"/>
            </Form.Item>
            <Divider/>
            <Form.Item name="description"
                       label={<div className="upload-label">상품 소개</div>}
                       rules={[{required: true, message: '상품 소개를 입력해주세요'}]}
            >
                <Input.TextArea size="large"
                                id="product-description"
                                showCount
                                maxLength={300}
                                defaultValue={product.description ? product.description : null}
                                placeholder="상품 소개를 입력해주세요"
                />
            </Form.Item>
            <Form.Item>
                <Button id="submit-button" size="large" htmlType="submit">상품 수정하기</Button>
            </Form.Item>
        </Form>
    </div>);
}

export default UpdatePage;
