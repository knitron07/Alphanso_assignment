import React from "react";
import Input from "./Input";
type SearchBarProps = {
  placeHolder: string;
  getQueryValue: (query: string) => void;
};
function SearchBar({ placeHolder, getQueryValue }: SearchBarProps) {
  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    getQueryValue(e.target.value);
  };

  return (
    <div>
      <Input onChange={handleOnChangeSearch} />
    </div>
  );
}

export default SearchBar;
