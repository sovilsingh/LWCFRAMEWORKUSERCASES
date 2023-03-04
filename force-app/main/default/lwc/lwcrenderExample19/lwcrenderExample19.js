import { LightningElement } from 'lwc';
import template2 from './template2.html';
import parent from './lwcrenderExample19.html';
export default class LwcrenderExample19 extends LightningElement {

    toggleTemplate = false;

    render(){
       return this.toggleTemplate?template2:parent;
    }

    handleClick(){
        this.toggleTemplate = this.toggleTemplate?false:true;
    }

}