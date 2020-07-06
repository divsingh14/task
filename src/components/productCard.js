import React from 'react';
import QuantityButton from './templates/quantity';          /* Quantity button */
import AddToCart from './templates/addtocartBtn';           /* Add to Cart Button */
import Spinner from './templates/spinner';                  /* Loading Spinner...if no data than Spinner  */

class ProductCard extends React.Component{
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
                    <div className="col" key={product.key}>
                        <span className="card-tag y-color">{ product.tag}</span>
                        <div className="card top-card" >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src="/images/tyre.jpg" className="img-fluid" alt="tyre" width="100" height="150" />
                                        <img src="/images/auto.png" className="img-fluid auto-express" alt="" />
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="product-name card-product-name">{product.name}</p>
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <img src="images/approved.png" alt="Approved" />
                                            </div>
                                            <div className="col-sm-4">
                                                <p className="model-no">{product.model}</p>
                                                <p className="model-type">{product.vehtype}</p>
                                            </div>
                                            <div className="col-sm-3">
                                            <p>Stock <img src="images/stock.png" className="img-fluid m-11" alt="stock" /></p>
                                            <p>Price ₪{product.price}</p>
                                            </div>
                                            <div className="col-sm-3">
                                                <p>Total</p>
                                                <p className="total-amount">₪{total}</p>
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
            });
            return renderCard;
        }
        
    }
}


export default ProductCard;  