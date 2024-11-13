import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Note } from "../components/Note";
import { deleteNote } from "../store/features/notesSlice";

export const Notes: FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();
  const handleDelete = (id: number | undefined) => {
    if (id) dispatch(deleteNote({ id }));
  };

  return (
    <div>
      <h1>Notes (Protected)</h1>
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};
