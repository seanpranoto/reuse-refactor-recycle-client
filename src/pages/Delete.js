import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeButton from "../components/HomeButton";

export default ({ _id }) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
            .then(result => setMessage("Deleted the product"))
            .catch(error => setMessage("There was an error when deleting the product. Error:" + error));
    }, [_id]);

    return (
        <>
            <h1>{message}</h1>
            <HomeButton/>
        </>
    );
};