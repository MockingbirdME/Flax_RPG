import { observable, decorate } from "mobx";

class CombatActionsStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.callDocumentationAPI();
    }
    combatActions = {};

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callDocumentationAPI = async () => {
        const response = await fetch('/combatactions');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        this.combatActions = body.CombatActions;
    };
}

export default decorate(CombatActionsStore, {
    combatActions: observable
});
