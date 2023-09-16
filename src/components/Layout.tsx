import { Outlet, useLocation } from "react-router-dom";
import { paths } from "../config/paths";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState<boolean>(false);
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
      {showSearch && <Search />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
