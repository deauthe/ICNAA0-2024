import { Outlet } from "react-router-dom";
import { Footer, Navbar, ScrollToHashElement } from "./components";

export default function Layout() {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
