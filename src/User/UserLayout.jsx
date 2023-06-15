
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../Compoments/Header";

const UserLayout = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <Outlet/>
    </div>
  );
};

export default UserLayout;