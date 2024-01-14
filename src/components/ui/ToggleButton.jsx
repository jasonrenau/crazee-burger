export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked = "Fermer",
  labelIfUnchecked = "Ouvrir",
}) {
  return (
    <div className="relative flex h-10 w-52 cursor-pointer items-center overflow-hidden rounded-full border border-gray-600 bg-zinc-600 p-1">
      <input
        type="checkbox"
        className="hidden "
        id="toggle"
        checked={isChecked}
        onChange={onToggle}
      />
      <label
        htmlFor="toggle"
        className="absolute  transform rounded-full transition-transform duration-300 ease-in-out"
      >
        <span
          className={`block size-8 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
            isChecked ? "translate-x-40" : "translate-x-0"
          }`}
        ></span>
      </label>
      <span className="text-nowrap text-sm text-gray-200 ">
        {isChecked ? labelIfChecked : labelIfUnchecked}
      </span>
    </div>
  );
}
