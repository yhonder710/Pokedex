import { Outlet } from "react-router-dom";
import { Naybar } from "./Naybar";


export function Layout() {
  return (
    <div className="Layout">
      <Naybar />
      <Outlet />
    </div>
  )
}
