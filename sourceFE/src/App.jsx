import React, { useEffect, useMemo, useState } from "react";
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
import HomeNavbar from "./components/headers/HomeNavbar";
import HomeHeader from "./components/headers/HomeHeader";
import Content from "./pages/stories/Content";
import { Genres } from "./pages/genres/Genres";
import { Ranking } from "./pages/ranking/Ranking";
import Authtemplate from "./pages/auth/AuthenTemplate";
import RequiredAuth from "./pages/auth/RequiredAuth";
import { Library } from "./pages/libraries/Library";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import useAuthen from "./hooks/useAuthen";
import PageNotFound from "./pages/notFound/PageNotFound";
import AdminHeader from "./components/headers/AdminHeader";
import AddAccount from "./pages/admin/Account/AddAccount";
import PageAuthor from "./pages/admin/Author/PageAuthor";
import AddAuthor from "./pages/admin/Author/AddAuthor";
import PageCategory from "./pages/admin/Category/PageCategory";
import AddCategory from "./pages/admin/Category/AddCategory";
import PageNovel from "./pages/admin/Novel/PageNovel";
import AddNovel from "./pages/admin/Novel/AddNovel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Profile } from "./pages/profile/Profile";
import { Search } from "./pages/search/SearchPage";
const App = () => {
  // const [roleMemo, setRoleMemo] = useState('customer')
  // useEffect(()=>{
  //   const Token = JSON.parse(localStorage.getItem("Token")) || {};
  //   setRoleMemo(Token.role)
  // },[])
  const { role } = useAuthen();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="login" element={<Authtemplate pages="login" />} />
        <Route path="register" element={<Authtemplate pages="register" />} />
        {role == "admin" ? (
          <Route path="/" element={<AdminHeader />}>
            <Route index element={<AdminDashboard />}></Route>
            <Route path="/addAccount" element={<AddAccount />}></Route>
            <Route path="/authors" element={<PageAuthor />} />
            <Route path="/addAuthor" element={<AddAuthor />} />
            <Route path="/categories" element={<PageCategory />} />
            <Route path="/addCategory" element={<AddCategory />} />
            <Route path="/novels" element={<PageNovel />} />
            <Route path="/addNovel" element={<AddNovel />} />
          </Route>
        ) : (
          <Route path="/" element={<HomeHeader />}>
            <Route>
              <Route index element={<Dashboard />} />
              <Route path="/stories/:Id?" element={<Stories />} />
              <Route path="/content/:idCate" element={<Content />} />
              <Route path="/genres/:novel/:genres?" element={<Genres />} />
              <Route path="/ranking/:genres?" element={<Ranking />} />
              <Route path="/:library?" element={<Library />} />
              <Route path="/history?" element={<Library />} />
              <Route path="/profile/:Id" element={<Profile />} />
              <Route path="/search" element={<Search />} />
            </Route>
          </Route>
        )}
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
