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
import { Ranking } from "./pages/ranking/Ranking";
import Authtemplate from "./pages/auth/AuthenTemplate";
import RequiredAuth from "./pages/auth/RequiredAuth";
import { Library } from "./pages/libraries/Library";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="login" element={<Authtemplate pages="login" />} />
        <Route path="register" element={<Authtemplate pages="register" />} />
        <Route path="/" element={<HomeHeader />}>
          <Route>
            <Route index element={<Dashboard />} />
            <Route path="/stories/:Id?" element={<Stories />} />
            <Route path="/content/:idCate" element={<Content />} />
            <Route path="/genres/:novel/:genres?" element={<Genres />} />
            <Route path="/ranking/:genres?" element={<Ranking />} />
            <Route path="/:library?" element={<Library />} />
          </Route>
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
