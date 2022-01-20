import { useState } from "react";
import EntriesList from "./components/EntriesList";
import EntryDisplay from "./components/EntryDisplay";
import SearchBar from "./components/SearchBar";
import { IEntryItem } from "./types/db";

const App = () => {
  const [entryList, setEntryList] = useState<IEntryItem[]>([]);
  const [entry, setEntry] = useState<IEntryItem | undefined>(undefined);
  return (
    <div>
      <SearchBar setEntryList={setEntryList} />
      <EntriesList entries={entryList} setEntry={setEntry} />
      <EntryDisplay entry={entry} />
    </div>
  );
};

export default App;
