import { LightningElement } from 'lwc';
export default class LwclifecycleExample20 extends LightningElement {
    name ;
    isChildShow = false;

    constructor(){
        super();
         console.log('Parent Const Called ----------');
    }

    connectedCallback() {
        console.log('Parent connected callback Called-------------');
    }

    renderedCallback(){
       console.log('Parent rerendered callback Called-------------');
    }

    changeHandler(event){
        this.name = event.target.value;
    }

    handleClick(){
        this.isChildShow = true;
    }

     handleClick(){
        this.isChildShow = !this.isChildShow;
    }

    errorCallback(error, stack) {
        this.error = error;
        console.log(error.message);
        console.log(stack);
    }

}