import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Note } from "../components/Note";

export const Notes: FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  return (
    <div>
      <h1>Notes (Protected)</h1>
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};
