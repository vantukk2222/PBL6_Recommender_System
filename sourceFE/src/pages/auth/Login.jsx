import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthen from '../../hooks/useAuthen'
import { setHeaderConfigAxios } from '../../api/AxiosConfig'
import {toast} from 'react-toastify'
import { login } from '../../ultis/utilsAuth'
const Login = () => {
  const {setIsAuth} = useAuthen();
  const navigate = useNavigate();

  useEffect(()=>{
    setIsAuth(false);
  },[])

  const infor = JSON.parse(localStorage.getItem("inforUser")) || {};

  const [user, setUser] = useState(() => {
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
    
    login(user)
      .then((res) => {
        // console.log("res"+res.data.accessToken);
        if (res.status == 200 || res.status == 202) {
          const token = res.data.accessToken;
          setHeaderConfigAxios(token);
          // const decode = utilsDecodeToken(token);
          const inforUser = {
            // role: decode.roles[0],
            userName: user.username ?? "",
            // token: token,
            password: checked === true ? user.password : "",
            // exp: decode.exp,
          };
          localStorage.setItem("inforUser", JSON.stringify(inforUser));
          setIsAuth(true);
          navigate("/");
          toast.success(`Wellcome ${user.username}!`, {
            autoClose: 1000,
          });
        }else {
          setErr(res.data.message)
          console.log(res.data.message);
        }
      })
      .catch(() => {
        toast.error("Sorry! Login failed");
      });
  };
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
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            ></input>
          </div>
          <div>
            <div>Password</div>
            <input
              type="password"
              placeholder="Password"
              className="auth--input"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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