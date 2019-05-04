import { observable, decorate } from "mobx";

class RulesStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.callDocumentationAPI();
    }
    strains = {};

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callDocumentationAPI = async () => {
        const response = await fetch('/strains');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        this.strains = body.Strains;
    };
}

export default decorate(RulesStore, {
    strains: observable
});
