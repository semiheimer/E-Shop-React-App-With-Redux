import React from "react";
import { BsShopWindow, BsSearch } from "react-icons/bs";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../../store/auth/auth-slice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className={styles.logo}>
            <BsShopWindow className={styles.logoImage} size={24} />
            <h2 className={styles.logo_title}>All You Need Here</h2>
          </div>
        </NavLink>
        <div className={styles.search}>
          <input type="text" className={styles.search_input} />
          <BsSearch className={styles.search_icon}></BsSearch>
        </div>
        <div className={styles.cart}>
          <div className={styles.item}>
            {user && (
              <NavLink
                to="/profile"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className={styles.first_row}>Hello Guest</span>
              </NavLink>
            )}
            {!user && (
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className={styles.second_row}>Login</span>
              </NavLink>
            )}
            {user && (
              <span onClick={logoutHandler} className={styles.third_row}>
                Logout
              </span>
            )}
          </div>
        </div>
        <NavLink to="/checkout" style={{ textDecoration: "none" }}>
          <div className={styles.basket}>
            <HeaderCartButton />
          </div>
        </NavLink>
      </header>
    </>
  );
}

export default Header;
