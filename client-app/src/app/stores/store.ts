import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import UserStore from "./userStore";

//vo ovoj interface stava se so e definirano vo activityStore.ts za posle da moze da se koristi nasekade vo app - ot
interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
  userStore: UserStore;
  modalStore: ModalStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  modalStore: new ModalStore(),
};

//context sopstven od prethodno definiraniot store za activity
export const StoreContext = createContext(store);

//kreira sopostven hooks
export function useStore() {
  return useContext(StoreContext);
}
