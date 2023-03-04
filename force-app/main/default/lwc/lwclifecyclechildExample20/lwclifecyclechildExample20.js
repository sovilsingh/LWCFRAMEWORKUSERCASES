import { LightningElement } from 'lwc';
export default class LwclifecyclechildExample20 extends LightningElement {

        constructor(){
        super();
         console.log('child Const Called ----------');
    }

    connectedCallback() {
        console.log('child connected callback Called-------------');
        throw new Error('Loading of child component is failed');
    }

    renderedCallback(){
       console.log('child rerendered callback Called-------------');
    }

    disconnectedCallback() {
        console.log('child disconnected callback Called-------------');
        alert('child disconnected');
    }

}