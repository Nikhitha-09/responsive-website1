import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>  
//     <ShopContextProvider>
//       <App />
//   </ShopContextProvider>
//   // </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <BrowserRouter>
       <App/>
      </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>
)
