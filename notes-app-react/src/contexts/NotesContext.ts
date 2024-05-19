import { createContext, useContext } from "react";

interface NotesT {
  id: number;
  title: string;
  content: string;
  bgColor: string;
  bgImage: string;
}

interface NotesContextT {
  notes: NotesT[];
  addNote: (note: NotesT) => void;
  updateNote: (id: number, note: NotesT) => void;
  deleteNote: (id: number) => void;
}

export const NotesContext = createContext<NotesContextT>({
  notes: [
    {
      id: 1234,
      title: "This",
      content: "this is content gi",
      bgColor: "bg-blue-400",
      bgImage: "./images/image.png",
    },
  ],
  addNote: (note) => {},
  updateNote: (id, note) => {},
  deleteNote: (id) => {},
});

export const useNotesContext = (): NotesContextT => {
  return useContext(NotesContext);
};

export const NotesProvider = NotesContext.Provider;
