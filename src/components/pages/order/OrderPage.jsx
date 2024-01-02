import { useParams } from "react-router-dom";
import Navbar from "../../ui/Navbar";

export default function OrderPage() {
  const params = useParams();

  return (
    <div className="flex h-screen items-center justify-center bg-orange-500">
      <div className="flex h-[95vh] w-[95%] flex-col rounded-lg ">
        <header className=" rounded-t-lg bg-white">
          <Navbar userName={params.name} />
        </header>
        <main className="h-full flex-1 rounded-b-lg bg-slate-50 shadow-[inset_0px_20px_20px_10px_#00000024]">
          mlklmk
        </main>
      </div>
    </div>
  );
}
