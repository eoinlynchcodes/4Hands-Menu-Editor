import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuContainer from './MenuContainer';

function CurrentMenu(){

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('https://four-hands-food-studio-node-js.herokuapp.com/menu')
        .then(res => {
            setMenu(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h2>The menu being displayed currently is:</h2>
            {
                menu.map((item, key) => {
                    return <MenuContainer key={key} item={item} />
                })
            }
        </div>
    );
}

export default CurrentMenu;