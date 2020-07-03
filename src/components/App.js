import React from 'react';
import './style/style.css';
import NavBar from './navBar';
import SearchFilter from './filters';
import ProductCard from './productCard';
import ProductList from './productList';
import LoadMoreResults from './templates/loadMore';

class App extends React.Component{
    state = {
        topCard : [
            {tag:'Premium Bestseller',name:'Continental - Contiecocontact 5',model:'205/55 R16 H',vehtype:'SUV',stock:4,price : 340},
            {tag:'Economy Bestseller',name:'Continental - Contiecocontact 5',model:'205/55 R16 H',vehtype:'SUV',stock:4,price : 340}
        ],
        listItem : [
            {name:'Continental PremiumContact™ 6',model:'205/55 R16 H',vehtype:'SUV',stock:20,price : 340},
            {name:'Continental PremiumContact™ 6',model:'205/55 R16 H',vehtype:'SUV',stock:8,price : 340},
            {name:'Continental PremiumContact™ 6',model:'205/55 R16 H',vehtype:'SUV',stock:0,price : 340},
        ]
    }
    render(){ 
        return(
            <main>
                <NavBar />
                <div className="container my-4" >
                    <h4>Recommended Products</h4>
                    <SearchFilter />
                    <div className="row">
                        <ProductCard productCard={this.state.topCard} />
                    </div>
                    <div className="row">
                        <ProductList productList={this.state.listItem} />
                    </div>
                    <LoadMoreResults />
                </div>
            </main>
        );
    }
}

export default App;