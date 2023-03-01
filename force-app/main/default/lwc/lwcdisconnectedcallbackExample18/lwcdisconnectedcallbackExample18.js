import { LightningElement } from 'lwc';
export default class LwcdisconnectedcallbackExample18 extends LightningElement {

    showHide = true;

    handleClick(){
        this.showHide = this.showHide?false:true;
    }

}