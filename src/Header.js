import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
//import { ShoppingBasket } from '@material-ui/icons';
//import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
//import { useStateValue } from './StateProvider';
//import { auth } from './firebase';
function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://cdn.freelogovectors.net/wp-content/uploads/2020/07/Indian-Premier-League-IPL-logo.png"

                />
            </Link>
            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
            <Link to="/login">
                <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello : Guest
                        </span>
                        <span 
                        className="header__optionLineTwo">
                            {'Sign In'}
                        </span>
                    
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span 
                    className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span 
                    className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

            </div>



        </div>
    )
}

export default Header
