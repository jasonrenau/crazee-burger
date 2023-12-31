import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const params = useParams();

  return (
    <main>
      <h1>Bienvenue {params.name} !</h1>
      <Link to={"/"}>
        <button>Déconnexion</button>
      </Link>
    </main>
  );
}
