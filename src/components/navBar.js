import React from 'react';

class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <div className="logo">
                <img src="/images/logo.png" alt="logo"/>
            </div>
            <div className="search">
                <input type="text" className="search-box" placeholder="Search" />
                <button className="search-button y-color"><i className="fas fa-search p-2"></i></button>
            </div>
            <div className="links">
                <ul className="nav-links text-center p-2">
                    <li>
                        <a href="#"><i className="fas fa-user"></i><br/>Account</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-list-alt"></i><br/>Order</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-shopping-cart"></i><br/>Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}



export default NavBar;