import create from 'zustand';

interface IAUthStore {
  isAuthenticated: boolean,
  isLoginInProgress: boolean,
  setIsAuthenticated: (isAuthenticated: boolean) => void,
  setIsLoginInProgress: (isLoginInProgress: boolean) => void,
  clearStore: () => void
}

const AuthStore = create<IAUthStore>(set => ({
  isAuthenticated: false,
  isLoginInProgress: false,
  setIsAuthenticated: (isAuthenticated : boolean) => set({ isAuthenticated }),
  setIsLoginInProgress: (isLoginInProgress : boolean) => set({ isLoginInProgress }),
  clearStore: () => set({
    isAuthenticated: false,
    isLoginInProgress: false
  })
}));

export default AuthStore;