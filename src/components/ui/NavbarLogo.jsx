import logo from "../../assets/images/logo.png";

export default function NavbarLogo() {
  return (
    <div
      className="flex cursor-pointer"
      onClick={() => window.location.reload()}
    >
      <h2 className="text-4xl text-yellow-500 ">CRAZEE</h2>
      <img src={logo} alt="logo" className="mx-auto size-10 " />
      <h2 className="text-4xl text-yellow-500 ">BURGER</h2>
    </div>
  );
}
