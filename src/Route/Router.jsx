import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Navbar from '../Components/Header';
import HomePage from '../Components/Home';
import FooterPage from '../Components/Footer';
import Potraites from '../DetailPage/Potraites';
import Birthday from '../DetailPage/Birthday';
import Wedding from '../DetailPage/Wedding';
import Home from '../DetailPage/House';
import Garden from '../DetailPage/Garden';
import Baby from '../DetailPage/Baby';
import SignIn from '../UI/Components/SignIn';
import Cart from '../UI/Components/Cart';
import Checkout from '../UI/Components/Checkout';
import Wishlist from '../UI/Components/Wishlist';
import Autumn from '../DetailPage/Autumn';
import Bags from '../DetailPage/Bags';
import Country from '../UI/Components/Country';
import Kids from '../DetailPage/Kids';
import PotraitesDescription from '../Description/PotraitesDescription';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/Home",
    element: <HomePage/>
  },
  {
    path: "/footer",
    element: <FooterPage />,
  },
  {
    path: "/potraites",
    element:<Potraites /> ,
  },
  {
    path: "/birthday",
    element:<Birthday /> ,
  },
  {
    path: "/wedding",
    element:<Wedding /> ,
  },
  {
    path: "/house",
    element:<Home /> ,
  },
  {
    path: "/garden",
    element:<Garden /> ,
  },
  {
    path: "/baby",
    element:<Baby /> ,
  },
  {
    path:'/signin',
    element:<SignIn />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/wishlist',
    element: <Wishlist />
  },
  {
    path: '/autumn',
    element: <Autumn />
  },
  {
    path:'/bags',
    element: <Bags />
  },
  {
    path:'/kids',
    element: <Kids />
  },
  {
    path: '/country',
    element: <Country />
  },
  {
    path:'/potraitesdescription/:productId',
    element: <PotraitesDescription />
  }
]);
export default router;