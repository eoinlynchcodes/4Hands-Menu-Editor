import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrentMenu(){

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3300/menu')
        .then(res => {
            console.log(res.data);
            setMenu(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h2>The menu being displayed currently is:</h2>
         
        </div>
    );
}

export default CurrentMenu;