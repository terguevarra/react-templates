import create from 'zustand';

import IBreadcrumb from '@interfaces/IBreadcrumb';

interface ICurrentPageStore {
  pageTitle: string,
  breadCrumb: Array<IBreadcrumb>,
  setPageTitle: (pageTitle: string) => void,
  setBreadCrumb: (breadCrumb: Array<IBreadcrumb>) => void,
  clearStore: () => void
}

const useCurrentPageStore = create<ICurrentPageStore>(set => ({
  pageTitle: '',
  breadCrumb: [],
  setPageTitle: (pageTitle) => set({ pageTitle }),
  setBreadCrumb: (breadCrumb) => set({ breadCrumb }),
  clearStore: () => set({ pageTitle: '', breadCrumb: [] })
}));

export default useCurrentPageStore;