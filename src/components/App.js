import React from 'react';
import './style/style.css';
import NavBar from './navBar';
import SearchFilter from './filters';
import ProductCard from './productCard';
import ProductList from './productList';
import LoadMoreResults from './templates/loadMore';

class App extends React.Component{
     
    render(){
        return(
            <main>
                <NavBar />
                <div className="container my-4" >
                    <h4>Recommended Products</h4>
                    <SearchFilter />
                    <ProductCard />
                    <ProductList />
                    <LoadMoreResults />
                </div>
            </main>
        );
    }
}

export default App;