import React from 'react';
import QuantityButton from './templates/quantity';
import AddToCart from './templates/addtocartBtn';

class ProductCard extends React.Component{
    render(){
        return(
            <div className="col-sm-12 col-lg-6">
                <span className="card-tag y-color">Preimium Bestseller</span>
                <div className="card" >
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-4 px-3">
                                <img src="/images/tyre.jpg" alt="tyre" width="100" height="150" />
                                <img src="/images/auto.png" className="auto-express" alt="" />
                            </div>
                            <div className="col-sm-8">
                                <p className="product-name">Continental - Contiecocect5</p>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src="images/approved.png" alt="Approved" />
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="model-no">205/55 R16 H</p>
                                        <p className="model-type">SUV</p>
                                    </div>
                                    <div className="col-sm-3">
                                       <p>Stock <img src="images/stock.png" alt="stock" /></p>
                                       <p>Price ₪340</p>
                                    </div>
                                    <div className="col-sm-3">
                                        <p>Total</p>
                                        <p className="total-amount">₪1360</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <QuantityButton />
                                    <div className="col text-right">
                                        <AddToCart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProductCard;  