type inputProps = {
  handleValue: (value: string) => void;
};

export const SearchInput = ({ handleValue }: inputProps) => {
  return (
    <input
      type="text"
      placeholder="Search the character"
      onChange={(e) => handleValue(e.target.value)}
    />
  );
};
