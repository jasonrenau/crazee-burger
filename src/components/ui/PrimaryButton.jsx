// eslint-disable-next-line react/prop-types
export default function PrimaryButton({ label, icon }) {
  return (
    <button className="flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-white">
      {label}
      {icon && icon}
    </button>
  );
}
