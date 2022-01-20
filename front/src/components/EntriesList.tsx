import { IEntryItem } from "../types/db";
import { Dispatch } from "react";

interface EntriesListProps {
  entries: IEntryItem[];
  setEntry: Dispatch<React.SetStateAction<IEntryItem | undefined>>;
}

const EntriesList = ({ entries, setEntry }: EntriesListProps) => {
  const chooseEntry = (entry: IEntryItem) => {
    setEntry(entry);
  };
  return (
    <ul>
      {entries.map((entry, i) => (
        <li
          key={i}
          style={{ cursor: "pointer" }}
          onClick={() => chooseEntry(entry)}
        >
          {entry.word} {entry.speachType}
        </li>
      ))}
    </ul>
  );
};

export default EntriesList;
