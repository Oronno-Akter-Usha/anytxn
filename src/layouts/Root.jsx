import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      {/* navbar */}

      {/* outlet */}
      <Outlet />

      {/* footer */}
    </div>
  );
};

export default Root;
