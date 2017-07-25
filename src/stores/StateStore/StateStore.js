import { observable, action } from 'mobx';

class StateStore {

  @observable authenticated;
  @observable authenticating;
  @observable items;
  @observable item;

  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.items = [];
    this.item = {};
  }

  @action
  setData(data) {
    this.items = data;
  }

  @action
  setSingle(data) {
    this.item = data;
  }

  @action
  clearItems() {
    this.items = [];
    this.item = {};
  }

  @action
  authenticate() {
    return new Promise((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }

}

export default StateStore;
