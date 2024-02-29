import Header from './components/Header';
import Home from './pages/Home';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { productsRedux } from './redux/productSlice';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/auth';

function App() {
  const dispatch = useDispatch()
  const productData = useSelector(state => state.product)

  useEffect(() => {
    (async() => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/products`)
      const resData = await res.json()
      dispatch(productsRedux(resData))
    })()
  },[])
  


  return (
    <div className="App">
      <Toaster />
      <AuthContextProvider>
          <Header />
          <main>
              <Outlet />
          </main>
          {/* <Footer /> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
