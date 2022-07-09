import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

//vo ovoj interface stava se so e definirano vo activityStore.ts za posle da moze da se koristi nasekade vo app - ot
interface Store {
  activityStore: ActivityStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
};

//context spstven od prethodno definiraniot store za activity
export const StoreContext = createContext(store);

//kreira spostven hooks
export function useStore() {
  return useContext(StoreContext);
}
