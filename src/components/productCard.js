import React from 'react';
import QuantityButton from './templates/quantity';
import AddToCart from './templates/addtocartBtn';
import Spinner from './templates/spinner';

class ProductCard extends React.Component{
    render(){
        const products = this.props.productCard;
        if(products.length === 0 ){
            return(
                <div className="text-center col-sm-12">
                    <Spinner />
                </div>
            )
        }else{
            const renderCard = products.map((product) =>{
                const total = product.price * 4;
                return(
                    <div className="col-lg-6">
                        <span className="card-tag y-color">{ product.tag}</span>
                        <div className="card" >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4 px-3">
                                        <img src="/images/tyre.jpg" alt="tyre" width="100" height="150" />
                                        <img src="/images/auto.png" className="auto-express" alt="" />
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="product-name">{product.name}</p>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <img src="images/approved.png" alt="Approved" />
                                            </div>
                                            <div className="col-sm-3">
                                                <p className="model-no">{product.model}</p>
                                                <p className="model-type">{product.vehtype}</p>
                                            </div>
                                            <div className="col-sm-3">
                                            <p>Stock <img src="images/stock.png" alt="stock" /></p>
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