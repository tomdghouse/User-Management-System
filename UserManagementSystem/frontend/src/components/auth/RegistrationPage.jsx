import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserService from '../service/UserService'

const RegistrationPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        city: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token')
            await UserService.register(formData, token)
            setFormData({
                name: '',
                email: '',
                password: '',
                role: '',
                city: ''
            })
            alert('User Registered Successfully')
            navigate('/admin/user-management')

        } catch (error) {
            console.error('Error registering user :', error);
            alert('An Error occured while registering user')
        }
    }
    return (
        <div className='auth-container'>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="">Role:</label>
                    <input type="text" name="role" value={formData.role} onChange={handleInputChange} required placeholder="Enter Your Role" />
                </div>
                <div className="form-group">
                    <label htmlFor="">City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} required placeholder="Enter Your City" />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegistrationPage
