import { LightningElement, api } from 'lwc';

export default class LWCDecoraterExample2 extends LightningElement {

   @api itemName = "Salesforce Sovil";

  @api handleChangeValue(){
      this.itemName = "Salesforce LWC Demo";
   }
}