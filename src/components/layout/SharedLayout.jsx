import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function SharedLayout() {
  return (
    <>
      <Outlet />
      <Toaster position="top-center" duration="500" />
    </>
  );
}
