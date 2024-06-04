import React, { useState, useEffect } from "react";
import { Link, resolvePath, useNavigate } from "react-router-dom";
import useAuthen from "../../hooks/useAuthen";
import { setHeaderConfigAxios } from "../../api/AxiosConfig";
import { toast } from "react-toastify";
import { login, utilsDecodeToken } from "../../ultis/utilsAuth";
const Login = () => {
  const { isAuth, setIsAuth, setRole, setUser } = useAuthen();
  const navigate = useNavigate();
  const [is_Loading, setIs_Loading] = useState(false);

  const infor = JSON.parse(localStorage.getItem("inforUser")) || {};
  const token = JSON.parse(localStorage.getItem("Token")) || {};

  const [userLogin, setUserLogin] = useState(() => {
    const user = {
      username: infor?.userName || "",
      password: infor?.password || "",
    };
    return user;
  });
  const [err, setErr] = useState("");

  const [checked, setChecked] = useState(() => {
    const password = infor.password || "";
    if (password) {
      console.log(password);
      return true;
    }
    console.log("infor: " + infor);
    return false;
  });
  const handleSubmit = (e) => {
    setIs_Loading(true);
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
            id: decode.id,
          };

          localStorage.setItem("inforUser", JSON.stringify(inforUser));
          localStorage.setItem("Token", JSON.stringify(accessToken));
          setIsAuth(true);
          setUser(userLogin);
          if (decode.role == "admin") {
            setRole("admin");
            navigate("/");
          } else {
            navigate(-1);
          }
          setIs_Loading(false);
          toast.success(`Wellcome ${userLogin.username}!`, {
            autoClose: 1000,
          });
        } else {
          setIs_Loading(false);
          setErr(res.data.message);
          console.log("mess", res.data.message);
        }
      })
      .catch(() => {
        setIs_Loading(false);
        toast.error("Sorry! Login failed");
      });
  };

  useEffect(() => {
    if (token?.id) {
      window.location.href = "/";
    } else {
      setIsAuth(false);
    }
  }, []);
  return (
    <>
      <div className="relative p-10 flex flex-col gap-8 bg-white">
        {is_Loading && (
          <div className="absolute  bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
            <div className="flex items-center">
              <span className="text-3xl mr-4">Loading</span>
              <svg
                className="animate-spin h-8 w-8 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        )}
        <div className="flex flex-col text-3xl mt-10">
          <a href="/" className="text-blue-500 text-lg w-fit">
            <i className="fas fa-arrow-left">Back</i>
          </a>
          <span>Login</span>
        </div>
        <form className="flex flex-col gap-6 h-[380px]" onSubmit={(e) => handleSubmit(e)}>
          <div className="mt-2">
            <div>Username</div>
            <input
              type="text"
              placeholder="Username"
              className="auth--input"
              value={userLogin.username}
              onChange={(e) =>
                setUserLogin({ ...userLogin, username: e.target.value })
              }
            ></input>
          </div>
          <div>
            <div>Password</div>
            <input
              type="password"
              placeholder="Password"
              className="auth--input"
              value={userLogin.password}
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
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
            {/* <div>
              <Link to="" className="underline text-blue-500">
                Forgot password
              </Link>
            </div> */}
          </div>
          <button
            type="submit"
            className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
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

export default Login;
