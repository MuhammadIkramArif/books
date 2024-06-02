import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";

const Pages = () => {
  const pathsList = [
    { path: "/", component: <HomePage /> },
    { path: "/about", component: <AboutPage /> },
    { path: "/contact", component: <ContactPage /> },
  ];

  return (
    <Routes>
      {pathsList.map((item, index) => (
        <Route
          path={`${item.path}`}
          element={item.component}
          key={`page-${index}`}
        />
      ))}
    </Routes>
  );
};

export default Pages;
