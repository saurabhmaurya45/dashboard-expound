import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { Outlet } from "react-router-dom";
import BreadCumb from "@components/BreadCumb";
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <BreadCumb />
      <Outlet />
    </>
  );
}

export default App;
