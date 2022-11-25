
import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import Taskcard from "./Taskcard";
import TaskFormControl from "./TaskFormControl";
import "../App.css";
const Task = () => {
    const [exchange, setExchange] = useState([]);

    const fetchData = async () => {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data.data);
        setExchange(data.data);
    };
    useLayoutEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}
            >
                {exchange.map((ele) => {
                    return (
                        <Taskcard
                            key={ele.id}
                            name={ele.name}
                            email={ele.email}
                            id={ele.id}
                            add={ele.address.geo}
                        />
                    );
                })}
            </div>
            <div>
                <TaskFormControl />
            </div>
        </>
    );
};

export default Task;