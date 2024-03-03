import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Color({ colorList }) {
    const { color } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!colorList.includes(color)) {
            navigate("/colors")
        }
    }, [color, colorList, navigate])

    return (
        <div style={{ backgroundColor: color, minHeight: '100vh', width: '100%' }}>
            <h1>This is {color}!</h1>
        </div>
    );
}

export default Color;