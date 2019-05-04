import { observable, decorate } from "mobx";

class SkillChecksStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.callDocumentationAPI();
    }
    skillChecks = {};

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callDocumentationAPI = async () => {
        const response = await fetch('/skillChecks');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        this.skillChecks = body.SkillChecks;
        console.log(body.SkillChecks);
    };
}

export default decorate(SkillChecksStore, {
    skillChecks: observable
});
