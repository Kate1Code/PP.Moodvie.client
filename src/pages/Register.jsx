import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import './LoginRegister.scss';

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState ({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        e.preventDefault(); 
        const {name, email, password} = data
        try {
            const {data} = await axios.post('/register', {
                name, email, password
            })
            if(data.error) {
                toast.error(data.error)
            }else {
                setData({})
                toast.success('Login Successful. Welcome!')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <div className="register">
          <form onSubmit={registerUser} className="register__form">
            <label className="register__label">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="register__input"
            />
            <label className="register__label">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="register__input"
            />
            <label className="register__label">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="register__input"
            />
            <button type="submit" className="register__button">
              Submit
            </button>
          </form>
        </div>
      );
    }
