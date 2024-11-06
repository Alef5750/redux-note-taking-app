import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryEnum, INoteFormData } from "../../types";

interface INotesState {
  notes: INoteFormData[];
  activeCategory: CategoryEnum | "all";
}
const initialState: INotesState = {
  notes: [],
  activeCategory: "all",
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<INoteFormData>) => {
      const id = state.notes.length + 1;
      state.notes = [...state.notes, { id, ...action.payload }];
    },
  },
});

export const { createNote } = NotesSlice.actions; // for the components
export default NotesSlice.reducer; // for the store
