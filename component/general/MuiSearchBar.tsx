import Image from "next/image";

type SearchbarProps = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
};

export function Searchbar({
  value,
  setValue,
  placeholder = "Search by name, email or phone",
}: SearchbarProps) {
  return (
    <div className="flex flex-row items-center gap-1 sm:w-[22vw] h-[50px] flex-shrink-0 border rounded pe-2">
      <input
        style={{
          fontWeight: "500",
          fontSize: 15,
        }}
        className="outline-none border-none w-full bg-transparent focus:outline-none focus:ring-0"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          setValue(value);
        }}
      />
      <button className="outline-none border-none">
        <Image src={"/assets/searchIcon.png"} height={24} width={24} alt="Search" />
      </button>
    </div>
  );
}
