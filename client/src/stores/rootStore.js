import RulesStore from "./rulesStore.js";
import TraitsStore from "./traitsStore.js";

export class RootStore {
  constructor() {
      this.rulesStore = new RulesStore(this);
      this.traitsStore = new TraitsStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
