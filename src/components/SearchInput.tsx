type inputProps = {
  handleValue: (value: string) => void;
};

export const SearchInput = ({ handleValue }: inputProps) => {
  return (
    <input
      type="text"
      placeholder="Search the character"
      className="w-2/3 bg-slate-500 border-2 border-green-800 p-2 rounded-lg outline-none text-white"
      onChange={(e) => handleValue(e.target.value)}
    />
  );
};
