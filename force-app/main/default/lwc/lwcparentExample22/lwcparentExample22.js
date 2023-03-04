import { LightningElement } from 'lwc';
export default class LwcparentExample22 extends LightningElement {

countValue = 0;

handleDecrement(){
    
    if(this.countValue !== 0){
      this.countValue--;
      }
    }
    

handleIncrement(){
  this.countValue++;
}

handleMultiplication(event){
      const multiplyingNumber = event.detail;
      this.countValue = this.countValue * multiplyingNumber;
}
}