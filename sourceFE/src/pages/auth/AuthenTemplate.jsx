import Register from "./Register";
import Login from "./Login";
import "./css/AuthenTemplate.css";
import PropTypes from "prop-types";

const Authtemplate = (props) => {
  const { pages } = props;
  return (
    <>
      <div className="auth-container">
        <div className="auth-container-item">
          <div className="p-4 auth-container-item-left">
            <div className="auth--title text-slate-100">
              Welcome to <br />
              Web novel
            </div>
          </div>
          <div>
            {pages === "login" ? (
              <Login />
            ) : pages === "register" ? (
              <Register />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Authtemplate.propTypes = {
  pages: PropTypes.string.isRequired,
};
export default Authtemplate;
