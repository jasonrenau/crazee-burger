import { useState } from "react";
import Profile from "../pages/order/Profile";
import NavbarLogo from "./NavbarLogo";
import ToggleButton from "./ToggleButton";
import { toast } from "sonner";

export default function Navbar({ userName }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.success("Mode admin activé");
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <nav className="flex w-full justify-between p-3 shadow-md">
      <NavbarLogo />
      <div className="flex items-center gap-5">
        <ToggleButton
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          labelIfChecked="DESACTIVER LE MODE ADMIN"
          onToggle={displayToastNotification}
          isChecked={isModeAdmin}
        />
        <Profile userName={userName} />
      </div>
    </nav>
  );
}
