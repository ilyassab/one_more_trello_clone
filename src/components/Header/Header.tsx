import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

class Header extends React.Component<{}, {}> {
    render() {
        return (
            <div className='header'>
                <img className='header_logo' src={logo} alt='logo'/>
            </div>
        );
    }
}

export default Header;