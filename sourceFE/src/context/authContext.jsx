import {  createContext, useState } from "react";
import PropTypes from 'prop-types'

const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState('');
    const contextAuthData = {
        accessToken,
        setAccessToken
    };
    return <AuthContext.Provider value={contextAuthData}>{children}</AuthContext.Provider>
};

AuthProvider.propTypes = {
    children : PropTypes.node.isRequired,
};
export default AuthContext;
