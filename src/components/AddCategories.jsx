import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategories = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="search gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategories.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
    
}