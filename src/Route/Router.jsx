import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
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
import PotraitesDetail from '../Description/PotraitesDetail';
import WeddingDetail from '../Description/WeddingDetail';
import HouseDetail from '../Description/HouseDetail';
import GardenDetail from '../Description/GardenDetail';
import BirthdayDetail from '../Description/BirthdayDetail';
import BabyDetail from '../Description/BabyDetail';
import ThreadArt from '../DetailPage/ThreadArt';
import StitchArt from '../DetailPage/StitchArt';
import PatelArt from '../DetailPage/PatelArt';
import Anniversary from '../DetailPage/Anniversary';
import HerGifts from '../DetailPage/HerGifts';
import HisGifts from '../DetailPage/HisGifts';
import Personalised from '../DetailPage/Personalised';

const router = createBrowserRouter(
  [
    { path: "/", element: <App />, },
    { path: "/potraites", element: <Potraites />, },
    { path: "/birthday", element: <Birthday />, },
    { path: "/wedding", element: <Wedding />, },
    { path: "/house", element: <Home />, },
    { path: "/garden", element: <Garden />, },
    { path: "/baby", element: <Baby />, },
    { path: '/signin', element: <SignIn /> },
    { path: '/cart', element: <Cart /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/wishlist', element: <Wishlist /> },
    { path: '/autumn', element: <Autumn /> },
    { path: '/bags', element: <Bags /> },
    { path: '/kids', element: <Kids /> },
    { path: '/country', element: <Country /> },
    { path: '/potraitesdetail/:productId', element: <PotraitesDetail /> },
    { path: '/babydetail/:productId', element: <BabyDetail /> },
    { path: '/birthdaydetail/:productId', element: <BirthdayDetail /> },
    { path: '/gardendetail/:productId', element: <GardenDetail /> },
    { path: '/housedetail/:productId', element: <HouseDetail /> },
    { path: '/weddingdetail/:productId', element: <WeddingDetail /> },
    { path: '/threadart', element: <ThreadArt /> },
    { path: '/stitchart', element: <StitchArt /> },
    { path: '/patelart', element: <PatelArt /> },
    { path: '/anniversary', element: <Anniversary /> },
    { path: '/hergifts', element: <HerGifts /> },
    { path: '/hisgifts', element: <HisGifts /> },
    { path: '/personal', element: <Personalised /> }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

export default router;