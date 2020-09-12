import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';

function Header() {


    return (
        <div className="header">
            <Link to="/">
            <img className="header-logo" src="https://completemusicupdate.com/wp-content/uploads/2016/05/amazon1250.jpg" />
            </Link>
            <div className="header-search">
                <input className="header-searchinput" type="text" />
                <SearchIcon className="searchinputicon"/>
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Hello vaibhav
                    </span>
                    <Link to="/login">
                        <span style={{color:'white'}} className="header-optionLineTwo">
                            Sign In
                        </span>
                    </Link>
                </div>

                <div className="header-option">
                    <span className="header-optionLineOne">
                        Returns
                    </span>
                    <span className="header-optionLineTwo">
                        & oders
                    </span>
                </div>

                <div className="header-option">
                    <span className="header-optionLineOne">
                        Your
                    </span>
                    <span className="header-optionLineTwo">
                        Prime
                    </span>
                </div>
            <Link to="/checkout">
                <div className="header-optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header-optionLineTwo header-basketcount">0</span>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Header
