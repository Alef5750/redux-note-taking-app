import { INoteFormData } from "../types";

interface IProps {
  note: INoteFormData;
}
export const Note = ({ note }: IProps) => {
  return (
    <div
      style={{
        border: "3px solid darkgreen",
        padding: "5px",
        maxWidth: "500px",
        cursor: "pointer",
      }}
    >
      <h2>{note.title}</h2>
      <h3>ID: {note.id}</h3>
      <p>{note.content}</p>
      <p>CATEGORY: {note.category}</p>
    </div>
  );
};
