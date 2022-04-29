import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <div className='my-3'>
            <nav className='d-flex justify-content-between container'>
                <div className='d-flex'>
                    <CustomLink to='/home'>HOME</CustomLink>
                    <CustomLink to='/inventory'>INVENTORY</CustomLink>
                    <CustomLink to='/blogs'>BLOGS</CustomLink>
                </div>
                <div className='d-flex'>
                    {
                        user ?
                            <CustomLink to='/home'>LOG OUT</CustomLink> &&
                            <CustomLink to='/addInventoryItem'>ADD ITEM</CustomLink> &&
                            <CustomLink to='/manageInventory'>MANAGE ITEMS</CustomLink> &&
                            <CustomLink to='/myItem'>MY ITEMS</CustomLink>
                            :
                            <CustomLink to='/login'>LOG IN</CustomLink>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;