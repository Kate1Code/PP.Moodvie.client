import { useState } from "react"
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import './LoginRegister.scss';

export default function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    
    const loginUser = async (e) => {
        e.preventDefault()
        const {email, password} = data
        try {
            const { data: responseData } = await axios.post('/login', { email, password });
            
            if (responseData.error) {
                toast.error(responseData.error)
            } else {
                setData({ email: '', password: '' })
                navigate('/')
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while trying to log in. Please try again later.")
        }
    }
    
    return (
        <div className="login">
          <form onSubmit={loginUser} className="login__form">
            <label className="login__label">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="login__input"
            />
            <label className="login__label">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="login__input"
            />
            <button type="submit" className="login__button">
              Login
            </button>
          </form>
        </div>
      );
    }
