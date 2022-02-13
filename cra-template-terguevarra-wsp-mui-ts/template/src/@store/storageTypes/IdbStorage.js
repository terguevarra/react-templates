import { get, set, del } from 'idb-keyval' ;

const IdbStorage = {
  getItem: async (name) => {
    console.log(name, "has been retrieved");
    return (await get(name)) || null
  },
  setItem: async (name, value) => {
    console.log(name, "with value", value, "has been saved");
    await set(name, value)
  },
  removeItem: async (name) => {
    console.log(name, "has been deleted");
    await del(name)
  }
};

export default IdbStorage;