import { formatPrice, replaceFrenchCommaWithDot } from "../../../utils/maths";

export default function ProductCard({ product, setMenu }) {
  const formattedPrice = formatPrice(product.price);
  const floatPrice = replaceFrenchCommaWithDot(formattedPrice);
  return (
    <div className="rounded-xl bg-white py-5 text-center shadow-lg">
      <img
        src={product.imageSource}
        alt={product.title}
        className="mx-auto h-40 w-52 object-contain"
      />
      <h5 className="py-5 text-4xl font-bold">{product.title}</h5>
      <div className="flex items-center justify-center gap-5">
        <span className="">{floatPrice} €</span>
        <button className="rounded-md bg-orange-500 px-4 py-2 text-white">
          Ajouter
        </button>
      </div>
    </div>
  );
}
