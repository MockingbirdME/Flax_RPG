import RulesStore from "./rulesStore.js";

export class RootStore {
  constructor() {
      this.rulesStore = new RulesStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
