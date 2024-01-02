import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 py-5">
      <h2 className="text-8xl text-yellow-500 max-md:text-6xl">CRAZEE</h2>
      <img src={logo} alt="logo" className="mx-auto size-40 max-md:size-20" />
      <h2 className="text-8xl text-yellow-500 max-md:text-6xl">BURGER</h2>
    </div>
  );
}
