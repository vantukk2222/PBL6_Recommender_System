import {  createContext, useState } from "react";
import PropTypes from 'prop-types'

const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({})
    const [accessToken, setAccessToken] = useState('');
    const contextAuthData = {
        accessToken,
        setAccessToken,
        isAuth,
        setIsAuth,
        user,
        setUser
    };
    return <AuthContext.Provider value={contextAuthData}>{children}</AuthContext.Provider>
};

AuthProvider.propTypes = {
    children : PropTypes.node.isRequired,
};
export default AuthContext;
