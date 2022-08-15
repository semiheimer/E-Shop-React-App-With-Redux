import './App.css';
import React, { Suspense } from 'react';
//Components
import Header from './components/Layout/Header/Header';
import HomePage from './pages/HomePage';
import NothingFoundPage from './pages/NothingFoundPage';
import LoadingSpinner from './components/UI/LoadingSpinner';
//store
import { getCartData } from './store/cart/getcart-actions';
import { sendCartData } from './store/cart/sendcart-actions';
import { getProductsData } from './store/getproducts-actions';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let isFirstRun = true;

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    if (cart.cartStatus) {
      dispatch(sendCartData(cart));
    }
  }, [dispatch, cart]);
  return (
    <div className='App'>
      <Suspense
        fallback={
          <div className='centered_spinner'>
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          ></Route>

          <Route
            path='/login'
            element={user ? <Navigate replace to='/' /> : <LoginPage />}
          ></Route>
          <Route
            path='/register'
            element={user ? <Navigate replace to='/' /> : <RegisterPage />}
          ></Route>
          <Route
            path='/profile'
            element={!user ? <Navigate to='/' /> : <ProfilePage />}
          ></Route>
          <Route
            path='/checkout'
            element={
              <>
                <Header />
                <CheckoutPage />
              </>
            }
          ></Route>
          <Route
            path='/products/:productId/'
            element={
              <>
                <Header />
                <ProductDetailPage />
              </>
            }
          ></Route>

          <Route path='*' element={<NothingFoundPage />}></Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </div>
  );
}

export default App;
