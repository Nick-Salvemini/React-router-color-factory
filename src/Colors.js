import React from "react";
import { Link } from "react-router-dom";

function Colors({ colorList }) {
    return (
        <>
            <h2>Please Select A Color</h2>
            <ul>
                {colorList.map(color => (
                    <li key={color}>
                        <Link to={`/colors/${color}`}>{color}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Colors;