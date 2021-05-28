import React from 'react';

const Card = ({data}) => {
    console.log( "LLL ", data)
    return (
        <div>
            {data.title}
        </div>
    );
};

export default Card;