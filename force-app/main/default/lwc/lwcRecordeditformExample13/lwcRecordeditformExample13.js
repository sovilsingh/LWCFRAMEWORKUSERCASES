import { LightningElement, api } from 'lwc';
import Contact from  '@salesforce/schema/Contact';
import Name from '@salesforce/schema/Contact.Name';
import Phone from '@salesforce/schema/Contact.Phone';
import {  ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class LwcRecordeditformExample13 extends LightningElement {

@api recordId;
objectApiName = Contact;
firstName = Name;
phone = Phone;

handleSuccess(event){

    const events = new ShowToastEvent({
         title : "Successful",
         message : "Contact Created",
         variant : 'success'
    });
    this.dispatchEvent(events);
}

}