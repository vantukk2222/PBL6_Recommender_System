import React, {useState, useEffect} from 'react'
import { Link, resolvePath, useNavigate } from 'react-router-dom'
import useAuthen from '../../hooks/useAuthen'
import { setHeaderConfigAxios } from '../../api/AxiosConfig'
import {toast} from 'react-toastify'
import { login,utilsDecodeToken } from '../../ultis/utilsAuth'
const Login = () => {
  const {setIsAuth,setRole,setUser} = useAuthen();
  const navigate = useNavigate();

  useEffect(()=>{
    setIsAuth(false);
  },[])

  const infor = JSON.parse(localStorage.getItem("inforUser")) || {};

  const [userLogin, setUserLogin] = useState(() => {
    const user = {
      username: infor?.userName || "",
      password: infor?.password || "",
    };
    return user;
  });
  const [err, setErr] = useState("")
  
  const [checked, setChecked] = useState(() => {
   
    const password =infor.password || "";
    if (password) {
      console.log(password);
      return true;
    }
    console.log("infor: "+infor);
    return false;
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsAuth(true);
    // navigate("/"); 
    
    login(userLogin)
      .then((res) => {
        // console.log("res"+res.data.accessToken);
        if (res.status == 200 || res.status == 202) {
          const token = res.data.accessToken;
          setHeaderConfigAxios(token);
          const decode = utilsDecodeToken(token);
          console.log(decode);
          const inforUser = {
            // role: decode.roles[0],
            userName: userLogin.username ?? "",
            // token: token,
            password: checked === true ? userLogin.password : "",            
          };
          const accessToken = {
            exp: decode.exp,
            role: decode.role,
            id: decode.id
          }
          
          localStorage.setItem("inforUser", JSON.stringify(inforUser));
          localStorage.setItem("Token",JSON.stringify(accessToken))
          setIsAuth(true);
          setUser(userLogin);
          if(decode.role == 'admin')
          {    
            setRole('admin');
            navigate("/admin");
            
          }
          else{
            navigate("/");
          }
    
          toast.success(`Wellcome ${userLogin.username}!`, {
            autoClose: 1000,
          });
        }else {
          setErr(res.data.message)
          console.log("mess",res.data.message);
        }
      })
      .catch(() => {
        toast.error("Sorry! Login failed");
      });
  };

  useEffect(()=>{

  },[])
  return (
    <>
      <div className="p-10 flex flex-col gap-8 bg-white">
        <div className="text-3xl">Login</div>
        <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div>Username</div>
            <input
              type="text"
              placeholder="Username"
              className="auth--input"
              value={userLogin.username}
              onChange={(e) => setUserLogin({ ...userLogin, username: e.target.value })}
            ></input>
          </div>
          <div>
            <div>Password</div>
            <input
              type="password"
              placeholder="Password"
              className="auth--input"
              value={userLogin.password}
              onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
            ></input>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="auth--checkbox"
                onChange={() => setChecked(!checked)}
                checked={checked}
              ></input>
              <label className="auth--checkbox-label">Remember me</label>
            </div>
            <div>
              <Link to="" className="underline text-blue-500">
                Forgot password
              </Link>
            </div>
          </div>
          <button type="submit" className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Login
          </button>
        </form>
        <div>
          <div>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline text-blue-500">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login