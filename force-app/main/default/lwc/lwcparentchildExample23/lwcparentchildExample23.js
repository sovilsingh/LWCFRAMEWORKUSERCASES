import { LightningElement } from 'lwc';
export default class LwcparentchildExample23 extends LightningElement {

    startCounter = 0;

    handleStartChange(event){
        this.startCounter = parseInt(event.target.value);
    }

    handleMaximizeCounter(){
      //const updateCounter = this.template.querySelector('c-lwcchildparent-example23');
      // updateCounter.handleclick();
       this.template.querySelector('c-lwcchildparent-example23').maximizecounter();
    }

}