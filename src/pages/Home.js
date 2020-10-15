import React from "react";
import Form from "../components/Form";
import ShowAll from "../components/ShowAll";
import axios from "axios";


export default () => {
    const createProduct = (product) => {
        axios.post("http://localhost:8000/api/products/create", product)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    };

    return (
        <>
            <Form onSubmitProps={createProduct} titleProps="" priceProps="" descProps="" />
            <ShowAll />
        </>
    );
};