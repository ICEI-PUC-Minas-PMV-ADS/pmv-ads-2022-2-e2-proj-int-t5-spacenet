import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, USER_GET } from './api'


//  "email": "usuario-teste@email.com"
// "password": "password"

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const userLogout = () => {
        window.localStorage.clear();
        navigate('/login')
        setLogin(false)
        setUser(null)
    }

    const userLogin = async (email, password) => {
        setLoading(true)
    
        const { url, options } = TOKEN_POST({
            email: email,
            password: password,
        })

        const { json, response } = await fetch(url, options)
        let token = json.access_Token

        if (response) {
            setError(false)
            setLogin(true)
            setUser(json.user)
            window.localStorage.setItem(token, 'token');
            navigate('/')
            setLoading(false)
        } else {
            setError('Email ou login invlálidos')
            setLoading(false)
        }
    }


    return (
        <UserContext.Provider
            value={{ userLogin, user, userLogout, loading, error }}>
            {children}
        </UserContext.Provider>
    )
}