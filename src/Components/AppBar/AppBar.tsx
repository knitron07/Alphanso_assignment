import React, { useContext, useEffect, useRef, useState } from "react";
import { AppBarWrapper, FilterButtonWrapper } from "../../Styled/AppBar";
import { Text } from "../../Styled/Common/Text";
import SearchBar from "../Common/SearchBar";
import Button from "../Common/Button";
import { StyledButton } from "../../Styled/Common/Button.styled";
import { TaskContex } from "../Utility/TaskContext";
import { TaskObject } from "../TodoTaskList/Task.type";
import { debounce } from "../Utility/Utility";
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
  const searchBarRef = useRef<HTMLInputElement>(null);
  const { taskList, setTaskList } = useContext(TaskContex);
  const [prevFinalTaskList, setPrevFinalTaskList] = useState(
    [] as TaskObject[]
  );
  const getQueryValue = (query: string) => {
    setFilter({ ...filter, search: query });
  };
  const depouncedGetQueryValue = debounce(getQueryValue,1000)
  const onFilterButtonClick = (buttonFilter: ButtonFilterType) => {
    setFilter({ ...filter, buttonFilter: buttonFilter });
  };
  const setDefaultFilter = () => {
    setFilter(defaultFilter);
  };

  function haveSameIds(
    prevFinalTaskList: TaskObject[],
    taskList: TaskObject[]
  ): boolean {
    const prevIds = prevFinalTaskList.map((task) => task.id);
    const currentIds = taskList.map((task) => task.id);
    if (prevIds.length !== currentIds.length) {
      return false;
    }

    prevIds.sort();
    currentIds.sort();

    return prevIds.every((id, index) => id === currentIds[index]);
  }

  useEffect(() => {
    tiggerFilter(filter);
  }, [filter]);

  useEffect(() => {
    if (!haveSameIds(prevFinalTaskList, taskList) && searchBarRef.current) {
      searchBarRef.current.value = "";
    }
    return () => {
      setPrevFinalTaskList(taskList);
    };
  }, [taskList]);
  return (
    <>
      <AppBarWrapper>
        <Text variant="h4">Today</Text>
        <SearchBar
          placeHolder="Search"
          getQueryValue={depouncedGetQueryValue}
          inputRef={searchBarRef}
        />
        <FilterButtonWrapper>
          <StyledButton
            className={`${
              filter.buttonFilter === "All" ? "primary" : "secondary"
            }`}
            label="All"
            onClick={() => {
              onFilterButtonClick("All");
            }}
          />
          <StyledButton
            className={`${
              filter.buttonFilter === "Completed" ? "primary" : "secondary"
            }`}
            label="Completed"
            onClick={() => {
              onFilterButtonClick("Completed");
            }}
          />
          <StyledButton
            className={`${
              filter.buttonFilter === "Incomplete" ? "primary" : "secondary"
            }`}
            label="Incomplete"
            onClick={() => {
              onFilterButtonClick("Incomplete");
            }}
          />
          {/* {prevFinalTaskList && (
            <StyledButton
              className={`${
                !haveSameIds(prevFinalTaskList, taskList)
                  ? "primary"
                  : "secondary"
              }`}
              label="Undo"
              onClick={() => {
                setTaskList(prevFinalTaskList);
              }}
            />
          )} */}
        </FilterButtonWrapper>
      </AppBarWrapper>
    </>
  );
}

export default AppBar;
