import { useEffect, useState } from "react";
import { CategoryEnum, ICreateNotePayload } from "../types";
import { createNote } from "../store/features/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";

const initialFormData: ICreateNotePayload = {
  title: "",
  content: "",
  category: CategoryEnum.PERSONAL,
  createdAt: Date.now().toString(),
};

export const CreateOrEditNote = () => {
  const [formData, setFormData] = useState<ICreateNotePayload>(initialFormData);
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);

  const { id } = useParams(); // check for id to know if in Edit mode
  useEffect(() => {
    if (id) {
      const currentData = notes.find((n) => n.id === Number(id));
      Object.assign(formData, currentData);
    }
  }, [id, notes, formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createNote(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          required
        />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value as CategoryEnum,
            })
          }
        >
          <option value={CategoryEnum.WORK}>Work</option>
          <option value={CategoryEnum.PERSONAL}>Personal</option>
          <option value={CategoryEnum.SHOPPING}>Shopping</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
