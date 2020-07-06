import React from 'react';
import QuantityButton from './templates/quantity';          /* Quantity button */
import AddToCart from './templates/addtocartBtn';           /* Add to Cart Button */
import Spinner from './templates/spinner';                  /* Loading Spinner...if no data than Spinner  */

class ProductCard extends React.Component{

    displayAmount(amount){
        var parts = amount.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    
    render(){
        const products = this.props.productCard;            /* Get data from App.js */
        if(products.length === 0 ){                         /* Check the data */            
            return(
                <div className="text-center col-sm-12">
                    <Spinner />
                </div>
            )
        }else{  
            const renderCard = products.map((product) =>{
                const total = product.price * 4;
                return(
                    <div className="carousel-cell col-sm-12 col-md-6 col-lg-6 col-12 mr-1" key={product.key}>
                        <span className="card-tag y-color">{ product.tag}</span>
                        <div className="card top-card" >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                                        <div className="product-img">
                                            <img src="/images/tyre.jpg" className="img-fluid" alt="tyre" width="100" height="150" />
                                            <img src="/images/auto.png" className="img-fluid auto-express" alt=""  width="30" />
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="product-name card-product-name">{product.name}</p>
                                            </div>
                                        </div>
                                        <div className="row no-gutters">
                                            <div className="col-lg-2 col-md-3 col-sm-2 col-4">
                                                <img src="images/approved.png" alt="Approved" width="55" />
                                            </div>
                                            <div className="col-lg-3 col-md-8 col-sm-3 col-8">
                                                <p className="model-no">{product.model}</p>
                                                <p className="model-type">{product.vehtype}</p>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-7 col-12 product-price">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-5 col-sm-12 col-6">
                                                        <p>Stock <img src="images/stock.png" className="img-fluid " alt="stock" /></p>
                                                        <p>Price ₪{this.displayAmount(product.price)}</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-5 col-sm-3 col-6">
                                                        <p>Total</p>
                                                        <p className="total-amount">₪{this.displayAmount(total)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <QuantityButton />
                                            </div>
                                            <div className="col-6 text-right">
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
            return renderCard;
        }
        
    }
}


export default ProductCard;  