import React from 'react';

const QuantityButton = () =>{
    return(
        <div className="col qty">
            <button>-</button>
            <input type="text" value='4' className="qty-value" readOnly />
            <button>+</button>
        </div>
    );
};

export default QuantityButton;