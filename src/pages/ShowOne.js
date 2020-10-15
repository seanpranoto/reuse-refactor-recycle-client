import React, { useEffect, useState } from "react";
import axios from 'axios';
import { StyledButton, StyledLinks } from "../components/StyledComponents";
import DeleteButton from "../components/DeleteButton";
import HomeButton from "../components/HomeButton";

export default ({ _id }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(product => setProduct(product.data.product))
            .catch(err => console.log(err));
    }, [_id]);

    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <StyledLinks to={`/${_id}/update`}><StyledButton>Update</StyledButton></StyledLinks>
            <DeleteButton _id={_id}/>
            <HomeButton/>
        </>
    );
};