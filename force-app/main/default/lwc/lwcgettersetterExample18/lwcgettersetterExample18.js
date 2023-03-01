import { LightningElement } from 'lwc';
export default class LwcgettersetterExample18 extends LightningElement {

    upperCaseItem = ' Inital Text';

    get itemName(){
        return this.upperCaseItem;
    }

    set itemName(value){
        this.upperCaseItem = value.toUpperCase();
    }

    handleClick(){
    this.itemName = 'After Click';

    }

    connectedCallback() {
       window.alert( 'this is Connected Callback ');
    }
    
    disconnectedCallback() {
        window.alert( 'this is disconnected Callback ');
    }
}