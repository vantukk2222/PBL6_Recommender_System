import React from "react";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Stories from "./pages/stories/Stories/Stories";
import NotFound404 from "./pages/error/NotFound404";
import HomeNavbar from "./components/headers/HomeNavbar";
import HomeHeader from "./components/headers/HomeHeader";
import Content from "./pages/stories/Content";
import { Genres } from "./pages/genres/Genres";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeHeader />}>
          <Route index element={<Dashboard />} />
          <Route path="/stories/:Id?" element={<Stories />} />
          <Route path="/content" element={<Content />} />
          <Route path="/genres?/:novel?/:genres?" element={<Genres />} />
        </Route>
      </>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
