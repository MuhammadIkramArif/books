import React from "react";
import Pages from "../routes/Pages";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center">
        <Pages />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
