import { useState, useEffect } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { BsShopWindow } from "react-icons/bs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../store/auth/auth-slice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const { email, password, password2 } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div className="main-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login_logo">
          <BsShopWindow
            className="login_icon "
            fontSize="large"
            size={25}
            style={{
              margin: "5px 8px 0 0",
              color: "#ff9f00",
            }}
          />
          <h2 className="login__logoTitle" style={{ color: "black" }}>
            e-Shop
          </h2>
        </div>
      </Link>
      <div className="container">
        <form id="form" className="form" onSubmit={formSubmitHandler}>
          <h2>Sign-up</h2>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              onChange={changeHandler}
              name="email"
              value={email}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password2">Confirm password</label>
            <input
              type="password"
              id="password2"
              placeholder="Confirm password"
              name="password2"
              value={password2}
              onChange={changeHandler}
            />
          </div>
          <button className="login_registerbutton">
            Create your eShop Account
          </button>
        </form>
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  );
}

export default Register;
