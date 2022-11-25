import axios from "axios";
import React, { useState } from "react";
import "../App.css";
const TaskFormControl = () => {
    const [data, setData] = useState({
        id: "",
        title: "",
        body: "",
    });
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        axios
            .post("https://jsonplaceholder.typicode.com/posts", data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const handeler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <>
            <form action="" onSubmit={submit} className="form">
                <input
                    value={data.id}
                    onChange={handeler}
                    placeholder="ID"
                    type="text"
                    name="id"
                />
                <br />
                {/* <input placeholder="Name" type="text" name="" id="" />
        <br /> */}
                <input
                    value={data.name}
                    onChange={handeler}
                    placeholder="Title"
                    type="text"
                    name="title"
                    id=""
                />
                <br />
                <input
                    value={data.body}
                    onChange={handeler}
                    placeholder="Body"
                    type="text"
                    name="body"
                    id=""
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default TaskFormControl;