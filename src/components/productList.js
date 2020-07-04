import React from 'react';
import QuantityButton from './templates/quantity';          /* Quantity button */
import AddToCart from './templates/addtocartBtn';           /* Add to Cart Button */
import NotifyMe from './templates/notifymeBtn';             /* Notify Me Button */
import Spinner from './templates/spinner';                  /* Loading Spinner...if no data than Spinner  */

class ProductList extends React.Component{

    /* For checking stock and return div with icon and message(if limited and no stock)*/
    stockDeatils(stock){
        if(stock === 0){
            return (
                <div className="col-sm-3 col-md-12 col-lg-3" >
                    <p>Stock <img src="/images/reddot.png" alt="stock" /></p>
                    <p className="stock-back">Back in 1 week!</p>
                </div>
            );
        }else if(stock < 10){
            return (
                <div className="col-sm-3 col-md-12 col-lg-3">
                    <p>Stock <img src="/images/yellowdot.png" alt="stock"/></p>
                    <p className="limited-qty">${stock} Tires left</p>
                </div>
                );
        }else{
            return(
                <div className="col-sm-3 col-md-12 col-lg-3">
                    <p>Stock <img src="/images/stock.png" alt="stock" /></p>
                </div>
            );
        }
    }
    /* Return Add to cart and Notify me button as per stock */
    cartButton(stock){
        if(stock === 0){
            return <NotifyMe />;
        }else{
            return <AddToCart />;
        }
    }

    render(){
        const products = this.props.productList;   /* Get data from App.js */
        if(products.length === 0 ){
            return(
                <div className="text-center col-sm-12">
                    <Spinner />
                </div>
            )
        }else{
            const renderList = products.map((product) =>{
                const total = product.price * 4;
                return(
                    <div className="col-lg-12 col-md-6 col-12  mt-1" key={product.key}>
                        <div className="card my-2">
                            <div className="card-body">
                                <div className="row py-2">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-5 col-md-12 col-lg-5">
                                                <p className="product-name">{product.name}</p>
                                            </div>
                                            <div className="col-sm-2 col-md-12 col-lg-2">
                                                <img src="/images/approved.png" className="image-fluid" alt="Approved" />
                                            </div>
                                            <div className="col-sm-2 col-md-12 col-lg-2">
                                                <p className="model-no">{product.model}</p>
                                                <p className="model-type">{product.vehtype}</p>
                                            </div>
                                        
                                            {this.stockDeatils(product.stock)}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="row">
                                            <div className="col-sm-2 col-md-12 col-lg-2">
                                                <p>Price ₪{product.price}</p>
                                            </div>
                                            <div className="col-sm-4 col-md-12 col-lg-4">
                                                <QuantityButton />
                                            </div>
                                            <div className="col-sm-2 col-md-12 col-lg-3">
                                                <p>Total <span className="total-amount">₪{total}</span></p>
                                            </div>
                                            <div className="col-sm-2 col-md-12 col-lg-2 list-btn">
                                                {this.cartButton(product.stock)}    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                );
            });
            return renderList;
        }
    }
}


export default ProductList;