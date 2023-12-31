import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <div className="flex">
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Entrez votre prénom..."
            required
            name="name"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <button>Accédez à votre espace</button>
      </div>
    </form>
  );
}
