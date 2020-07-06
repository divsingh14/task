import React from 'react';

const QuantityButton = () =>{
    return(
        <div className="col qty">
            <button className="qty-icon">-</button>
            <input type="text" value='4' className="qty-value" readOnly />
            <button className="qty-icon">+</button>
        </div>
    );
};

export default QuantityButton;