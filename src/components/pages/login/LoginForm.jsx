import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuUserCircle2 } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import PrimaryButton from "../../ui/PrimaryButton";

export default function LoginForm() {
  //state
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  // comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${inputValue}`);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // affichage
  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className="flex max-w-96 flex-col items-center gap-5"
    >
      <h1 className="text-5xl font-bold text-white">Bienvenue chez nous !</h1>
      <span className="h-[2px] w-full bg-orange-500"></span>
      <h2 className="text-3xl font-bold text-white">Connectez-vous</h2>

      <div className="w-full">
        <label
          htmlFor="name"
          className="relative flex w-full items-center rounded-md bg-white px-4 py-2"
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 transform">
            <LuUserCircle2 />
          </div>
          <input
            type="text"
            placeholder="Entrez votre prénom..."
            required
            name="name"
            value={inputValue}
            onChange={handleChange}
            className="w-full pl-12"
          />
        </label>
      </div>

      <PrimaryButton
        label={"Accéder à mon espace"}
        icon={<IoIosArrowForward />}
      />
    </form>
  );
}
