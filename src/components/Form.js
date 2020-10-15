import React, { useState } from "react";
import { StyledButton, StyledFields, StyledForm } from "./StyledComponents";

export default ({ onSubmitProps, titleProps, priceProps, descProps }) => {
    const [title, setTitle] = useState(titleProps);
    const [price, setPrice] = useState(priceProps);
    const [desc, setDesc] = useState(descProps);

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitProps({ title, price, desc })
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledFields>
                <label htmlFor="Title">Title: </label>
                <textarea cols="30" rows="5" name="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </StyledFields>
            <StyledFields>
                <label htmlFor="Price">Price: </label>
                <textarea cols="30" rows="5" name="Price" onChange={(e) => setPrice(e.target.value)} value={price} />
            </StyledFields>
            <StyledFields>
                <label htmlFor="Desc">Description: </label>
                <textarea cols="24" rows="7" name="Desc" onChange={(e) => setDesc(e.target.value)} value={desc} />
            </StyledFields>
            <StyledButton>Submit</StyledButton>
        </StyledForm>
    );
};