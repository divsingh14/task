import React from 'react';

const Spinner = () =>{
    const spinnerStyle = {
        width: '4rem', 
        height: '4rem'
    };
    return(
        <div className="spinner-border" style={spinnerStyle} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;