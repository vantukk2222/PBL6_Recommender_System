import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { register, RegisterValidate } from '../../ultis/utilsAuth';
import { toast } from "react-toastify";

const Register = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setError(RegisterValidate(newUser));
  }, [newUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      console.log("err",error);
      return;
    }
    
    register(newUser)
      .then((res) => {
        console.log("res:",res.data);
        if(res.status == 200 || res.status ==202){
          const inforUser = {
            // role: decode.roles[0],
            userName: res.data.username ?? "",
            // token: token,
           // password: checked === true ? user.password : "",
            // exp: decode.exp,
          };
          localStorage.setItem("inforUser", JSON.stringify(inforUser));
          navigate("/login");
        }else{
          setError(res.data.message)
        }
        console.log(res);;
      })
      .catch(() => {
        setError("Register failed");
      });
  };
  return (
    <>
      <div className="px-10 flex flex-col gap-6 bg-white">
        <div className="">
          
          <div className="text-3xl mt-4">Register</div>
        </div>
        <form className="flex flex-col gap-6 h-[460px]" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div>Username</div>
            <input
              type="text"
              placeholder="Username"
              className="auth--input"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            />
          </div>
          <div>
            <div>Email</div>
            <input
              type="email"
              placeholder="Email@gmail.com"
              className="auth--input"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
          </div>
          <div>
            <div>Name</div>
            <input
              type="text"
              placeholder="name"
              className="auth--input"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </div>
          <div>
            <div>Password</div>
            <input
              type="password"
              placeholder="password"
              className="auth--input"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
          </div>
          <div>
            <div>Confirm Password</div>
            <input
              type="password"
              placeholder="password"
              className="auth--input"
              value={newUser.Confirmpass}
              onChange={(e) => setNewUser({ ...newUser, Confirmpass: e.target.value })}
            />
          </div>
         
          <button type="submit" className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Register
          </button>
        </form>
        <div>
          {error !== "" ? <div className="text-red-500 mb-1">{error}</div> : <></>}
          </div>
        <div className='flex-row mb-4'>
          <div >
            Already have an account?{" "}
            <Link to="/login" className="underline text-blue-500">
              Login
            </Link>
          </div>
          
          
        </div>
      </div>
    </>
  );
}

export default Register