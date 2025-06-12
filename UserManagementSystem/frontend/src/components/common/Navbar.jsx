import React from 'react'
import UserService from '../service/UserService'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const isAuthenticated = UserService.isAuthenticated();
    const adminOnly = UserService.adminOny();

    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout?')
        if (confirmDelete) {
            UserService.logout();
        }
    }

    return (
        <nav>
            <ul>
                {!isAuthenticated && <li><Link to="/">Ghouse Dev</Link></li>}
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                {adminOnly && <li><Link to="/admin/user-management">User Management</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    )
}

export default Navbar
