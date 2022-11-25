import React, { useState } from "react";
import "../App.css";
const Taskcard = ({ id, name, email, add }) => {
    const [udata, setUdata] = useState({
        name,
        id,
    });
    const setData = () => {
        setUdata({ name, id });
        console.log(udata);
    };
    const navigateToPage = () => {
        window.open(
            `http://maps.google.com/maps?q=${add.lat},${add.lng}`,
            "_blank"
        );
    };
    return (
        <div className="taskCard">
            <h3>{id}</h3>
            <p>{name}</p>
            <p>{email}</p>
            <button className="cBtn" onClick={navigateToPage}>
                Gmap
            </button>
            <button className="cBtn" onClick={setData}>
                Select
            </button>
        </div>
    );
};

export default Taskcard;