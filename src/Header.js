import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket},dispatch] = useStateValue();
    const sum = basket?.map(e => e.price).reduce((a, b) => a + b, 0);
    console.log('this is basket from product >>>>',sum);
    return (
        <div className='header'>
        <Link to="/">
        <img className='header__logo' src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png"/>
        </Link>
            
            <div className="header__search">
                <input className="header__searchInput"
                type='text'
                />
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className='header__option'>
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Order</span>
                </div>
                <div className='header__option'>
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon/>
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
