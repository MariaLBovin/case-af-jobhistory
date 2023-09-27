import { createBrowserRouter } from "react-router-dom";
import { paths } from "@/config/paths";
import Layout from "@/components/Layout";
import NotFound from "@/components/NotFound";
import Home from "@/components/Home";
import SearchResults from "@/components/SearchResults";
import Ad from "@/components/Ad";
import Contact from "@/components/Contact";

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: paths.home,
        element: <Home />,
      },
      {
        path: paths.searchResults,
        element: <SearchResults />,
      },
      {
        path: paths.ad,
        element: <Ad />,
      },
      {
        path: paths.contact,
        element: <Contact />,
      },
    ],
  },
]);
