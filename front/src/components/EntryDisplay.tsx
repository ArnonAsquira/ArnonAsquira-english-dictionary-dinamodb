import { IEntryItem } from "../types/db";

interface EntryDisplayProps {
  entry: IEntryItem | undefined;
}

const EntryDisplay = ({ entry }: EntryDisplayProps) => {
  if (entry === undefined) return null;
  return (
    <div>
      <h1>{entry.word}</h1>
      <div>part of speech: {entry.speachType}</div>
      <div>defintion: {entry.definition}</div>
    </div>
  );
};

export default EntryDisplay;
