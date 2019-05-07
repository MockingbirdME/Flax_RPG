import RulesStore from "./rulesStore.js";
import CombatActionsStore from "./combatActionsStore.js";
import SkillChecksStore from "./skillChecksStore.js";
import StrainsStore from "./strainsStore.js";
import TraitsStore from "./traitsStore.js";

export class RootStore {
  constructor() {
      this.rulesStore = new RulesStore(this);
      this.combatActionsStore = new CombatActionsStore(this);
      this.skillChecksStore = new SkillChecksStore(this);
      this.strainsStore = new StrainsStore(this);
      this.traitsStore = new TraitsStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
