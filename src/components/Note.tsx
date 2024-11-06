import { CategoryEnum, INoteFormData } from "../types";

interface IProps {
  note: INoteFormData;
}

const colorBasedOnCategory = (category: CategoryEnum) => {
  let color = "lightblue";
  if (category === CategoryEnum.PERSONAL) color = "lightcoral";
  if (category === CategoryEnum.WORK) color = "yellow";
  if (category === CategoryEnum.SHOPPING) color = "orange";
  const styleObj = {
    border: "3px solid darkgreen",
    backgroundColor: color,
    padding: "5px",
    margin: "10px",
    maxWidth: "500px",
    cursor: "pointer",
  };
  return styleObj;
};

export const Note = ({ note }: IProps) => {
  return (
    <div style={colorBasedOnCategory(note.category)}>
      <h2>{note.title}</h2>
      <h3>ID: {note.id}</h3>
      <p>{note.content}</p>
      <p>CATEGORY: {note.category}</p>
    </div>
  );
};
