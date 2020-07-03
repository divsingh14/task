import React from 'react';

const QuantityButton = () =>{
    return(
        <div class="col qty">
            <button>-</button>
            <input type="text" value='4' class="qty-value" readonly />
            <button>+</button>
        </div>
    );
};

export default QuantityButton;