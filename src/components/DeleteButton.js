import React from "react";
import { StyledLinks, StyledButton } from "./StyledComponents";

export default ({_id}) => {
    return (
        <StyledLinks to={`/${_id}/delete`}><StyledButton style={{ background: "red" }}>Delete</StyledButton></StyledLinks>
    );
};