import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/CSS/App.css';
import { createRoot } from 'react-dom/client';
import router from './router.jsx';
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />); 