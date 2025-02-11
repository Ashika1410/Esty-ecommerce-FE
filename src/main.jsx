// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import router from "./Route/Router";
// import store from './Redux/Store';
// import { Provider } from 'react-redux';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store} >
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// )
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using 'react-dom/client' for React 18+
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Router'; // Ensure that you have your Router setup correctly
import store from './Redux/Store'; // Your Redux store
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
