import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CategoryEnum,
  ICreateNotePayload,
  IUpdateNotePayload,
} from "../../types";

interface INotesState {
  notes: ICreateNotePayload[];
  activeCategory: CategoryEnum | "all";
}
const initialState: INotesState = {
  notes: [
    {
      id: 1,
      title: "Learn Redux Toolkit",
      content: "listen to course and do assignments daily",
      category: CategoryEnum.WORK,
      createdAt: "1000009978786",
    },
    {
      id: 2,
      title: "Pack for America",
      content: "clothing, toiletries, the works",
      category: CategoryEnum.PERSONAL,
      createdAt: "097676554",
    },
    {
      id: 3,
      title: "Buy sunglasses",
      content: "on Sunday shopping trip in NJ",
      category: CategoryEnum.SHOPPING,
      createdAt: "1000009978786",
    },
  ],
  activeCategory: "all",
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<ICreateNotePayload>) => {
      const id = state.notes.length + 1;
      state.notes = [...state.notes, { id, ...action.payload }];
    },
    updateNote: (state, action: PayloadAction<IUpdateNotePayload>) => {
      const { id, updatedFields } = action.payload;
      state.notes = state.notes.map((note) =>
        note.id === id ? { ...note, ...updatedFields } : note
      );
    },
    deleteNote: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.notes = state.notes.filter((note) => note.id !== id);
    },
  },
});

export const { createNote, updateNote, deleteNote } = NotesSlice.actions; // for the components
export default NotesSlice.reducer; // for the store
