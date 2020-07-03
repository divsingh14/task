import React from 'react';
import QuantityButton from './templates/quantity';
import AddToCart from './templates/addtocartBtn';

class ProductList extends React.Component{
    render(){
        return(
            <div class="col-lg-12">
                    <div class="card my-2">
                        <div class="card-body">
                            <div class="row py-2">
                                <div class="col-sm-2">
                                    <p class="product-name">Continental - Contiecocect5</p>
                                </div>
                                <div class="col-sm-1">
                                    <img src="/images/approved.png" alt="Approved" />
                                </div>
                                <div class="col-sm-1">
                                    <p class="model-no">205/55 R16 H</p>
                                    <p class="model-type">SUV</p>
                                </div>
                                <div class="col-sm-1">
                                    <p>Stock <img src="/images/reddot.png" alt="stock" /></p>
                                    <p class="stock-back">Back in 1 week!</p>
                                </div>
                                <div class="col-sm-1">
                                    <p>Price ₪340</p>
                                </div>
                                <div class="col-sm-2">
                                    <QuantityButton />
                                </div>
                                <div class="col-sm-2">
                                    <p>Total <span class="total-amount">₪1360</span></p>
                                </div>
                                <div class="col-sm-2">
                                    <button class="notify-me"><i class="fas fa-bell"></i><b>Notify Me!</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}


export default ProductList;