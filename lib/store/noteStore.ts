// Створіть у папці lib/store файл noteStore.ts і реалізуйте в
//  ньому Zustand-стор з наступними функціями:

// draft: об’єкт, що містить тимчасові дані форми нотатки 
// (title, content, tag).
// setDraft(note): функція для оновлення полів чернетки.
// clearDraft(): функція для очищення чернетки до початкового стану. 
// У якості початкового стану використовуйте наступний об’єкт

import { NewNote } from "@/types/note";
import { create } from "zustand";
import {persist} from "zustand/middleware";

const initialDraft: NewNote = {
  title: '',
  content: '',
  tag: 'Todo',
};

type NoteStore = {
    draft: NewNote,
    setDraft: (note: NewNote) => void,
    clearDraft: () => void;
}

export const useNoteStore = create<NoteStore>()(persist(
    (set) => ({
    draft: initialDraft,
    setDraft: (note: NewNote) => {
        set({ draft: note });
    },
    clearDraft: () => {
        set({ draft: initialDraft });
    }
    }), {
        name: 'note-storage',
        partialize: (state) => ({ draft: state.draft }),
    })
);
