import { useEffect, useState } from "react";
import { CategoryEnum, ICreateNotePayload } from "../types";
import { createNote, updateNote } from "../store/features/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";

const emptyFormData: ICreateNotePayload = {
  title: "",
  content: "",
  category: CategoryEnum.PERSONAL,
  createdAt: Date.now().toString(),
};

export const CreateOrEditNote = () => {
  const [formData, setFormData] = useState<ICreateNotePayload>(emptyFormData);
  const [initialFormData, setInitialFormData] =
    useState<ICreateNotePayload | null>(null);

  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);

  const { id } = useParams(); // check for id to know if in Edit mode
  useEffect(() => {
    const initializeFormIfEditing = () => {
      if (id) {
        const currentData = notes.find((n) => n.id === Number(id));
        if (currentData) {
          setInitialFormData(currentData);
          setFormData(currentData);
        }
      }
    };
    initializeFormIfEditing();
  }, [id, notes]);

  type InputOrTextareaChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >;

  const handleChange = (e: InputOrTextareaChangeEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (id && initialFormData) {
      let updatedFields: Partial<ICreateNotePayload> = {};
      const keys = Object.keys(formData) as Array<keyof ICreateNotePayload>;
      keys.forEach((key) => {
        if (formData[key] !== initialFormData[key]) {
          updatedFields = { ...updatedFields, [key]: formData[key] };
        }
      });
      dispatch(updateNote({ id: Number(id), updatedFields }));
    } else dispatch(createNote(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={initialFormData?.title || formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          defaultValue={initialFormData?.content || formData.content}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={initialFormData?.category || formData.category}
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
