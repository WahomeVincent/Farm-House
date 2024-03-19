import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import Home from './pages/Home';
import Newproduct from './pages/Newproduct';
import Errorpage from './pages/Errorpage';
import { store } from './redux/store';
import {Provider } from 'react-redux'
import CategoryPage from './pages/CategoryPage';
import Products from './pages/Products';
import ProductItem from './pages/ProductItem';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Payment from './pages/Payment';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Errorpage />}>
          <Route index element={<Home />} />
          <Route path='/products/:filterBy' element={<ProductItem />} />
          <Route path='products' element={<Products />} />
          <Route path='/product/:category' element={<CategoryPage />} />
          <Route path='newproduct' element={<Newproduct />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} /> 
          <Route path='account' element={<Account />} />
          {/* <Route path='payment' element={<Payment />} /> */}

    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
            <RouterProvider router={router} />
  </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
