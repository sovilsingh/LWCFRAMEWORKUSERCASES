import { LightningElement, api } from 'lwc';
export default class LwcchildparentExample23 extends LightningElement {

  @api counter = 0;

  @api maximizecounter(){
    this.counter = this.counter+10;
   }

}