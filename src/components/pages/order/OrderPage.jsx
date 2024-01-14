import { useParams } from "react-router-dom";
import Navbar from "../../ui/Navbar";
import { fakeMenu2 } from "../../../utils/fakeMenu";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function OrderPage() {
  const params = useParams();
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div className="flex h-[100vh] items-center justify-center  bg-orange-500 ">
      <div className="h-[95%] w-[95%] overflow-hidden rounded-lg py-5">
        <header className="rounded-t-lg bg-white">
          <Navbar userName={params.name} />
        </header>
        <main className="h-full overflow-y-scroll rounded-b-lg bg-slate-50 p-10 shadow-[inset_0px_20px_20px_10px_#00000024] ">
          <div className="grid-auto-fit grid gap-5 pb-10">
            {menu.map((product) => (
              <ProductCard key={product.id} product={product} setMenu={setMenu} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
