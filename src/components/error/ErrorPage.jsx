import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main>
      <h1>Erreur {error.status}</h1>
      <Link to={"/"}>
        <button>Retourner à la page d&apos;accueil</button>
      </Link>
    </main>
  );
}
