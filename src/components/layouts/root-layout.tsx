import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
