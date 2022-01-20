import { useRef } from "react";
import { word } from "../utils/SearchWord";
import { Dispatch } from "react";
import { IEntryItem } from "../types/db";

interface searchBarProps {
  setEntryList: Dispatch<React.SetStateAction<IEntryItem[]>>;
}

const SearchBar = ({ setEntryList }: searchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    if (inputRef.current === null) return;
    const entryList = await word(inputRef.current.value);
    if (entryList === undefined) return;
    setEntryList(entryList);
  };
  return (
    <form>
      <input ref={inputRef} />
      <button type="button" onClick={() => handleSearch()}>
        search word
      </button>
    </form>
  );
};

export default SearchBar;
