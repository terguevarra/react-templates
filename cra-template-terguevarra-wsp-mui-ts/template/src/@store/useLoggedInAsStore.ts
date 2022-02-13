import create from 'zustand';
import { persist } from 'zustand/middleware';
import { decode, encode } from 'js-base64';

import { LOGGEDINAS } from '@configurations/SessionNames';

type LoggedInBulkParameter = {
  loggedInAsUsername: string,
  loggedInAsDisplayName: string
}

interface ILoggedInAsStore {
  loggedInAsUsername: string,
  loggedInAsDisplayName: string,
  setLoggedInAsUsername: (loggedInAsUsername: string) => void,
  setLoggedInAsDisplayName: (loggedInAsDisplayName: string) => void,
  setLoggedInBulk: ({loggedInAsDisplayName, loggedInAsUsername} : LoggedInBulkParameter) => void,
  clearStore: () => void
}

const useLoggedInAsStore = create<ILoggedInAsStore>(persist(set => ({
    loggedInAsUsername: '',
    loggedInAsDisplayName: '',
    setLoggedInAsUsername: (loggedInAsUsername) => set({ loggedInAsUsername }),
    setLoggedInAsDisplayName: (loggedInAsDisplayName) => set({loggedInAsDisplayName}),
    setLoggedInBulk: ({ 
      loggedInAsUsername, loggedInAsDisplayName
    }) => set({
      loggedInAsUsername, loggedInAsDisplayName
    }),
    clearStore: () => set({ loggedInAsUsername: '', loggedInAsDisplayName: '' })
  }), 
  {
    name: LOGGEDINAS,
    getStorage: () => sessionStorage,
    serialize: (state) => encode(JSON.stringify(state)),
    deserialize: (str) => JSON.parse(decode(str))
  }
));

export default useLoggedInAsStore;