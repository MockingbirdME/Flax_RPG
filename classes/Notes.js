/* eslint-disable max-classes-per-file*/
const util = require('util');

class Notes {
  
  constructor() {
    this._notes = new Map();
  }
  
  add({name, description}) {
    if (this._notes.get(name)) throw new Error(`Cannot add note with name "${name}" that already exists`);
    this._notes.set(name, new Note({name, description}));
  }
  
  replace({name, description}) {
    this._notes.set(name, new Note({name, description}));
  }
  
  delete(name) {
    if (!name) throw new Error('Name is required to target a note for deletion.');
    
    this._notes.delete(name);
  }
  
  /**
   * Converts this to a generic object, suitable for storage.
   * @return {object}
   */
  toJSON() {
    return Array.from(this._notes, ([name, note]) => (note)).sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  /**
   * Overrides the default util.inspect behavior to use {@link Notes#toJSON} instead.
   */
  [util.inspect.custom]() {
    return this.toJSON();
  }
  
}


class Note {
  
  constructor({name, description}) {
    if (!name || !description) throw new Error('Note requries a name and description field.');
    
    this._name = name;

    this._description = description;
  }
  
  get name() {return this._name;}
  
  get description() {return this._description;}
  
  /**
   * Converts this to a generic object, suitable for storage.
   * @return {object}
   */
  toJSON() {
    const {name, description} = this;
    return {name, description};
  }

  /**
   * Overrides the default util.inspect behavior to use {@link Note#toJSON} instead.
   */
  [util.inspect.custom]() {
    return this.toJSON();
  }

}

module.exports = Notes;
