import { observable, action, decorate } from "mobx";

class RulesStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.callDocumentationAPI();
  }
  rawDocs = {};
  chapters = [];
  test = "THIS IS A TEST STRING."

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callDocumentationAPI = async () => {
      const response = await fetch('/documentation');
      const body = await response.json();
      if (response.status !== 200) {
          throw Error(body.message)
      }
      this.rawDocs = body.DOCUMENTATION;
      console.log(Object.keys(body.DOCUMENTATION));
      // return body;
  };

}

export default decorate(RulesStore, {
    rawDocs: observable,
    test: observable,
    callDocumentationAPI: action
});
