import React from 'react';

function MenuContainer(props){


    console.log(props);
    const data = props.item;
    console.log(data);

    return (
        <div>
            <h3><u>{data.starterTitle}</u></h3>
            <h3>{data.starter}</h3>
            <h3><u>Price:</u></h3>
            <h3>{data.price}</h3>
            <h3><u>Pick-up Points:</u></h3>
            <h3>{data.pickUpPoints}</h3>
            <h3>{data.otherTitle}</h3>
            <h3>{data.other}</h3>
            <h3><u>{data.mainTitle}</u></h3>
            <h3>{data.main}</h3>
            <h3><u>{data.dessertTitle}</u></h3>
            <h3>{data.dessert}</h3>
            <h3>{data.howToOrder}</h3>
            <h3>{data.additionalInformation}</h3>
        </div>
    )
}

export default MenuContainer;