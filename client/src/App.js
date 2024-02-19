import Header from './components/Header';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { productsRedux } from './redux/productSlice';

function App() {
  const dispatch = useDispatch()

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
      <Header />
      <Home />
    </div>
  );
}

export default App;
