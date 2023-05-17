import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route index element={<ProductListing/>}/>
        <Route path='product/:productId' element={<ProductDetails/>}/>
    </Route>
  )
)

function App() {

  return (

      
      <RouterProvider router={router}/>


  );
}

export default App;
