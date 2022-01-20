import { useRef } from "react";
import { word } from "../utils/SearchWord";
import { Dispatch } from "react";
import { IEntryItem } from "../types/db";
import { SpeechPart } from "../types/speechPart";

interface searchBarProps {
  setEntryList: Dispatch<React.SetStateAction<IEntryItem[]>>;
  pos: SpeechPart | undefined;
}

const SearchBar = ({ setEntryList, pos }: searchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    if (inputRef.current === null) return;
    const entryList = await word(inputRef.current.value, pos);
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
