import { HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Profile({ userName }) {
  return (
    <div className="flex gap-2">
      <div className="text-right">
        <p>
          Hey,{" "}
          <span className="text-orange-500 first-letter:uppercase">
            {userName}
          </span>
        </p>
        <Link to={"/"}>
          <button className="text-sm">Se déconnecter</button>
        </Link>
      </div>
      <div>
        <HiMiniUserCircle size="3rem" color="gray" />
      </div>
    </div>
  );
}
