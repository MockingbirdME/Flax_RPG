import { observable, decorate } from "mobx";

class RulesStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.callDocumentationAPI();
    }
    traits = {};

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callDocumentationAPI = async () => {
        const response = await fetch('/traits');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        this.traits = body.Traits;
    };
}

export default decorate(RulesStore, {
    traits: observable
});
