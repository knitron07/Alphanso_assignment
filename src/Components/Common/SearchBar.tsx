import React from "react";
import Input, { InputProps } from "./Input";
import { StyledInput } from "../../Styled/Common/Input.styled";
import { OutlineCardWrapper } from "../../Styled/CustomListItem";
import { SearchBarWrapper } from "../../Styled/Common/SearchBar.styled";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
type SearchBarProps = {
  placeHolder: string;
  getQueryValue: (query: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
};

function SearchBar({ placeHolder, getQueryValue, inputRef }: SearchBarProps) {
  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    getQueryValue(e.target.value);
  };

  return (
    <SearchBarWrapper>
      <div className="search-icon-container">
        <SearchOutlinedIcon fontSize="small" />
      </div>
      <StyledInput
        placeHolder={placeHolder}
        onChange={handleOnChangeSearch}
        inputRef={inputRef}
      />
    </SearchBarWrapper>
  );
}

export default SearchBar;
