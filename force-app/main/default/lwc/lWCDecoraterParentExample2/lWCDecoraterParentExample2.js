import { LightningElement } from 'lwc';

export default class LWCDecoraterParentExample2 extends LightningElement {

    handleChangeValue(){
       this.template.querySelector('c-l-w-c-decorater-example2').handleChangeValue();
    }
}