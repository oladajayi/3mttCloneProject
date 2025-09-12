import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Navbar />
      </div>

      {/* Scrollable content area */}
      <div
        className="d-flex flex-column bg-light"
        style={{
          minHeight: "100vh",

          paddingBottom: "60px", // space for Footer
          overflowY: "auto", // scrollable content
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "1rem",
            width: "100%",
            overflow: "visible", // prevent inner scroll
          }}
          className="text-center"
        >
          <Outlet />
        </div>
      </div>

      {/* Fixed Footer */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
