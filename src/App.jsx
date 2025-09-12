import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import RootLayout from './RootLayOut/RootLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Apply from './Pages/Apply';
import Deeptech from './Pages/Deeptech';
import HireAFellow from './Pages/HireAFellow';
import Partnerships from './Pages/Partnerships'; 
import User from './Components/LoginComponents/User';
import ForgetPassword from './Components/LoginComponents/ForgetPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="apply" element={<Apply />} />
      <Route path="deeptech" element={<Deeptech />} />
      <Route path="hire" element={<HireAFellow />} />
      <Route path="partnerships" element={<Partnerships />} />
      <Route path="user" element={<User />} />
      <Route path="forgetPassword" element={<ForgetPassword />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
