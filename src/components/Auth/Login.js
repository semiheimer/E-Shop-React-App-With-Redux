import { useEffect } from "react";
import classes from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BsShopWindow } from "react-icons/bs";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../store/auth/auth-slice";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    if (isError) toast.error(message);
    if (user) {
      navigate("/");
    }
    dispatch(reset()); // bu gerekli mi?
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    dispatch(login({ email: enteredEmail, password: enteredPassword }));
    navigate("/");
  };

  return (
    <div className={classes.main_container}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className={classes.login_logo}>
          <BsShopWindow
            className={classes.login_icon}
            fontSize="large"
            size={25}
            style={{
              margin: "5px 8px 0 0",
              color: "#ff9f00",
            }}
          />
          <h2 className={classes.login__logoTitle} style={{ color: "black" }}>
            e-Shop
          </h2>
        </div>
      </NavLink>
      <div className={classes.container}>
        <form id="form" className="form" onSubmit={formSubmitHandler}>
          <h2>Sign-in</h2>
          <div className={classes.form_control}>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              ref={emailInputRef}
            />
          </div>
          <div className={classes.form_control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter a password"
              ref={passwordInputRef}
            />
          </div>
          <button type="submit" className={classes.login_signinbutton}>
            Sign-in
          </button>
        </form>
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          className={classes.login_registerbutton}
          onClick={() => navigate("/register")}
        >
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
