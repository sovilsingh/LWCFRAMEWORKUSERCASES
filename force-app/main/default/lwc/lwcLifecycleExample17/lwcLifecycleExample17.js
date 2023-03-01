import { LightningElement, track } from 'lwc';

export default class LwcLifecycleExample17 extends LightningElement {

    name = 'Sovil';
    constructor() {
        super();
        console.log(' Inside Contructor ');
        this.name = this.name + ' Singh';
    }

    connectedCallback() {
        console.log(' Inside connected callback ');
    }

    disconnectedCallback() {
        console.log(' Inside disconnected callback ');
    }

     /*
     render(){
         //code
     }
     */

    renderedCallback() {
        console.log(' Inside rendered callback ');
    }

   

    errorCallback(error, stack) {
        console.log(' Inside error callback')
    }
}