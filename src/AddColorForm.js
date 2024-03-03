import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddColorForm({ addColor }) {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(inputValue);
        setInputValue("");
        navigate("/colors")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorName"></label>
            <input
                id="colorName"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
            />
            <button type="submit">Add Color</button>
        </form>
    );
}

export default AddColorForm;