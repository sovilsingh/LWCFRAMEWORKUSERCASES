import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LWCFirstComponentExample1 extends LightningElement {

    myTitle = "Salesforce Example1";

    connectedCallback(){
       
        //varaible is mutable
        var namevar = "Salesforce Sovil from var";
        if(this.myTitle){
            //block varaible
           const nameconst = "Salesforce Sovil from let";  //varaible is non-mutable only once declare not change
           let namelet = "Salesforce Sovil from let";   //varaible is mutable
        }
        // window.alert("Name "+nameconst);
        let callMyfunction = this.myFunction(10,2);
        let callMyfunctionArrow = this.myFunctionArrow(10,2);
        window.alert(" noraml function " +callMyfunction);
        window.alert(" Arrow function " +callMyfunctionArrow);
    }

    handleClick(){
        //window.alert('button clicked');
        //this.showToast(this.myTitle);
    }

    //show toast 
    showToast(titlegot){
       const eventToast = new ShowToastEvent({
            title : titlegot,
            message : titlegot,
            varaint : 'brand'
       });
       this.dispatchEvent(eventToast);
    }

    //gerneral function
    myFunction(dividend, divisor){

        return  (dividend/divisor);
    }

    //arrow function
    myFunctionArrow = (dividend, divisor) => {
        return  (dividend/divisor);
    }
}