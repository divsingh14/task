import React from 'react';
import './style/style.css';
import NavBar from './navBar';                      /* For Navigation Bar */ 
import SearchFilter from './filters';               /* For Search Filter and Sorting */ 
import ProductCard from './productCard';            /* Product Card just below search filter*/
import ProductList from './productList';            /* List Item */
import LoadMoreResults from './templates/loadMore'; /* Load More Button */

class App extends React.Component{
    /* Data */
    state = {
        topCard : [
            {key:1,tag:'Premium Bestseller',name:'Continental - Contiecocontact 5',model:'205/55 R16 H',vehtype:'SUV',stock:4,price : 340},
            {key:2,tag:'Economy Bestseller',name:'Continental - Contiecocontact 5',model:'205/55 R16 H',vehtype:'SUV',stock:4,price : 340}
        ],
        listItem : [
            {key:1,name:'Continental PremiumContact™ 6',model:'205/55 R16 H',vehtype:'SUV',stock:20,price : 340},
            {key:2,name:'Continental PremiumContact™ 6',model:'205/55 R16 H',vehtype:'SUV',stock:8,price : 340},
            {key:3,name:'Continental PremiumContact™ 6',model:'205/55 R16 H',vehtype:'SUV',stock:0,price : 340},
        ]
    }
    render(){ 
        return(
            <main>
                <NavBar />  
                <div className="container my-4" >
                    <h4 className="main-heading"><b>Recommended Products</b></h4>
                    <SearchFilter />
                    <div className="main-carousel"  data-flickity='{ "cellAlign": "left", "contain": true , "prevNextButtons": false , "pageDots": false}'>
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