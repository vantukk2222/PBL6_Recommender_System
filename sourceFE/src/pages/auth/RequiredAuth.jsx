import React,{us} from 'react'
import { useLocation,Navigate, Outlet } from 'react-router-dom'
import useAuthen from '../../hooks/useAuthen';

const RequiredAuth = () => {
    const {isAuth} = useAuthen();
    const location = useLocation();

  return isAuth ?  (
    <Outlet/>
    ):
    (
        <Navigate to={{ pathname: "/login", state: { from: location } }} replace />
    )
}

export default RequiredAuth