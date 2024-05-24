import React, { useContext } from 'react'
import AuthContext from '../context/authContext';
const useAuthen = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuthen