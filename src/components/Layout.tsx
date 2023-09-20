import { Outlet, useLocation } from "react-router-dom";
import { paths } from "../config/paths";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import layoutStyles from "../styles/Layout.module.css";
import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";

const Layout = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname == paths.home ||
      location.pathname == paths.searchResults
    ) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main
        className={`${layoutStyles.main_container} ${
          location.pathname == "/" && layoutStyles.home_green
        }`}
      >
        <DigiLayoutContainer>
          {showSearch && <Search />}
          <Outlet />
        </DigiLayoutContainer>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
