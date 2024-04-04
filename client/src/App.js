import Header from './components/Header';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { productsRedux } from './redux/productSlice';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/auth';
import Sticky from 'react-stickynode';


function App() {
  const dispatch = useDispatch()
  const productData = useSelector(state => state.product)

  useEffect(() => {
    (async() => {
      const res = await fetch('https://farm-house-server-kappa.vercel.app/')
      const resData = await res.json()
      dispatch(productsRedux(resData))
    })()
  },[])
  


  return (
    <div className="App">
        <Toaster />
        <AuthContextProvider>
        <Sticky className='relative z-50 ' top="#header" bottomBoundary="#content">
            <Header />
        </Sticky>
          <main>
              <Outlet />
          </main>
          <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
