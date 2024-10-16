import React, { useEffect, useState } from "react";
import { AppBarWrapper } from "../Styled/AppBar";
import { Text } from "../Styled/Text";
import SearchBar from "../Common/SearchBar";
import Button from "../Common/Button";
type AppbarProps = {
  tiggerFilter: (filter: Filter) => void;
  resetFilter?: () => void;
};

type ButtonFilterType = "All" | "Completed" | "Incomplete";
export type Filter = {
  search: string;
  buttonFilter: ButtonFilterType;
};

function AppBar({ tiggerFilter }: AppbarProps) {
  const defaultFilter: Filter = {
    search: "",
    buttonFilter: "All",
  };
  const [filter, setFilter] = useState(defaultFilter);
  const getQueryValue = (query: string) => {
    setFilter({ ...filter, search: query });
  };

  const onFilterButtonClick = (buttonFilter: ButtonFilterType) => {
    setFilter({ ...filter, buttonFilter: buttonFilter });
  };
  const setDefaultFilter = () => {
    setFilter(defaultFilter);
  };
  useEffect(() => {
    tiggerFilter(filter);
  }, [filter]);
  return (
    <>
      <AppBarWrapper>
        <Text>Todo</Text>
        <SearchBar placeHolder="Search" getQueryValue={getQueryValue} />
        <Button
          label="All"
          onClick={() => {
            onFilterButtonClick("All");
          }}
        />
        <Button
          label="Completed"
          onClick={() => {
            onFilterButtonClick("Completed");
          }}
        />
        <Button
          label="Incomplete"
          onClick={() => {
            onFilterButtonClick("Incomplete");
          }}
        />
      </AppBarWrapper>
    </>
  );
}

export default AppBar;
