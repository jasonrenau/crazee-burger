import AdminButton from "../pages/order/AdminButton";
import Profile from "../pages/order/Profile";
import NavbarLogo from "./NavbarLogo";

export default function Navbar({ userName }) {
  return (
    <nav className="flex w-full justify-between p-3 shadow-md">
      <NavbarLogo />
      <div className="flex items-center gap-5">
        <AdminButton />
        <Profile userName={userName} />
      </div>
    </nav>
  );
}
