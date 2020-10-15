import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton";
import HomeButton from "../components/HomeButton";

export default ({ _id }) => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    const styledButton = {
        marginTop: "2rem"
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(product => {
                setProduct(product.data.product);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [_id]);

    const updateProduct = (product) => {
        axios.put(`http://localhost:8000/api/products/${_id}/update`, product)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        navigate("/");
    };

    return (
        <>
            {loaded &&
                <>
                    <Form onSubmitProps={updateProduct} titleProps={product.title} priceProps={product.price} descProps={product.desc} />
                    <DeleteButton _id={_id} />
                    <HomeButton />
                </>
            }
        </>
    );
};