import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <div className="h-[7000px]">
      {/* navbar */}
      <Navbar />

      {/* outlet */}
      <Outlet />

      {/* footer */}
    </div>
  );
};

export default Root;
