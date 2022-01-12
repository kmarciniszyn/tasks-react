import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Field from "../Field";
import { Wrapper } from "./styled";

const Search = () => {
    const history = useHistory();
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);
        const newQuery = target.value;

        if(newQuery.trim() === ""){
            searchParams.delete("szukaj");
        }else {
            searchParams.set("szukaj", newQuery);
        }

        history.push(`${location.pathname}?${searchParams}`);
    }

    return (
        <Wrapper>
            <Field
                placeholder="Wyszukaj zadanie..."
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};

export default Search;