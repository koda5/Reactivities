import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";

//vo ovoj interface stava se so e definirano vo activityStore.ts za posle da moze da se koristi nasekade vo app - ot
interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
};

//context sopstven od prethodno definiraniot store za activity
export const StoreContext = createContext(store);

//kreira sopostven hooks
export function useStore() {
  return useContext(StoreContext);
}
