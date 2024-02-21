import React, { useEffect, useState } from 'react'
import "../App.css";

const ApiData = () => {
    const [data, setData] = useState([]);
    const fetchApi = () => {
        const fetchedData = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => setData(json));
        return fetchedData;
    }

    useEffect(() => {
        fetchApi();
    }, []);
    console.log("What is the response from the server", data);
    return (
        <div className='grid-container'>
            <div className='grid-system'>
                {data.map((elements) => {
                    return (
                        <div key={elements.id} className='columns'>
                            <h2>{elements.name}</h2>
                            <p>{elements.email}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ApiData