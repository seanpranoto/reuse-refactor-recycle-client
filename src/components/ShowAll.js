import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledLinks } from "./StyledComponents";



export default () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(products => setProducts(products.data.products))
            .catch(err => console.log({ err: err }))
    }, [products]);
    return (
        <>
            {
                products.map((val, i, arr) =>
                    (
                        <>
                            <StyledLinks to={`/${val._id}`}>{val.title}</StyledLinks>
                        </>
                    ))
            }
        </>
    );
}