import create from 'zustand';
import { persist } from 'zustand/middleware';
import { decode, encode } from 'js-base64';

import { VIEWAS } from '@configurations/SessionNames';

interface IViewAsStore {
  viewAsUsername: string,
  viewAsDisplayName: string,
  setViewAsUsername: (viewAsUsername: string) => void,
  setViewAsDisplayName: (viewAsDisplayName: string) => void,
  clearStore: () => void
}

const useViewAsStore = create<IViewAsStore>(persist(set => ({
    viewAsUsername: '',
    viewAsDisplayName: '',
    setViewAsUsername: (viewAsUsername) => set({ viewAsUsername }),
    setViewAsDisplayName: (viewAsDisplayName) => set({viewAsDisplayName}),
    clearStore: () => set({ viewAsUsername: '', viewAsDisplayName: '' })
  }), 
  {
    name: VIEWAS,
    getStorage: () => sessionStorage,
    serialize: (state) => encode(JSON.stringify(state)),
    deserialize: (str) => JSON.parse(decode(str))
  }
));

export default useViewAsStore;