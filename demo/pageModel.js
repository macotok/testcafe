import { Selector } from 'testcafe';

/*
  Page Object
 */
export default class Page {
  constructor () {
    this.nameSelector = Selector('.name');
    this.submitSelector = Selector('.submit');
    this.thanksMessage = Selector('.thanksMessage');
    this.errorMessage = Selector('.errorMessage');
    this.backSelector = Selector('.back');
    this.setTestSpeed = 0.5;
  }
}
