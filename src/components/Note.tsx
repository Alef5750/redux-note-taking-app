import { INoteFormData } from "../types";

interface IProps {
  note: INoteFormData;
}
export const Note = ({ note }: IProps) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <h3>ID: {note.id}</h3>
      <p>{note.content}</p>
      <p>CATEGORY: {note.category}</p>
    </div>
  );
};