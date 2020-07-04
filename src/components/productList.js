import React from 'react';
import QuantityButton from './templates/quantity';
import AddToCart from './templates/addtocartBtn';
import NotifyMe from './templates/notifymeBtn';
import Spinner from './templates/spinner';


class ProductList extends React.Component{

    stockDeatils(stock){
        if(stock === 0){
            return (
                <div className="col-sm-1" >
                    <p>Stock <img src="/images/reddot.png" alt="stock" /></p>
                    <p className="stock-back">Back in 1 week!</p>
                </div>
            );
        }else if(stock < 10){
            return (
                <div className="col-sm-1">
                    <p>Stock <img src="/images/yellowdot.png" alt="stock"/></p>
                    <p className="limited-qty">${stock} Tires left</p>
                </div>
                );
        }else{
            return(
                <div className="col-sm-1">
                    <p>Stock <img src="/images/stock.png" alt="stock" /></p>
                </div>
            );
        }
    }

    cartButton(stock){
        if(stock === 0){
            return <NotifyMe />;
        }else{
            return <AddToCart />;
        }
    }

    render(){
        const products = this.props.productList;
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
                                    <div className="col-sm-2">
                                        <p className="product-name">{product.name}</p>
                                    </div>
                                    <div className="col-sm-1">
                                        <img src="/images/approved.png" alt="Approved" />
                                    </div>
                                    <div className="col-sm-1">
                                        <p className="model-no">{product.model}</p>
                                        <p className="model-type">{product.vehtype}</p>
                                    </div>
                                    
                                    {this.stockDeatils(product.stock)}
                                    
                                    <div className="col-sm-1">
                                        <p>Price ₪{product.price}</p>
                                    </div>
                                    <div className="col-sm-2">
                                        <QuantityButton />
                                    </div>
                                    <div className="col-sm-2">
                                        <p>Total <span className="total-amount">₪{total}</span></p>
                                    </div>
                                    <div className="col-sm-2 list-btn">
                                        {this.cartButton(product.stock)}    
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