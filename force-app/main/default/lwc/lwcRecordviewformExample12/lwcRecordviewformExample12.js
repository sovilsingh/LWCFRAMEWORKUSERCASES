import { LightningElement, api } from 'lwc';
import Contact from '@salesforce/schema/Contact';
import LastName from '@salesforce/schema/Contact.LastName';
import Phone from '@salesforce/schema/Contact.Phone';
import Email from '@salesforce/schema/Contact.Email';

export default class LwcRecordviewformExample12 extends LightningElement {

@api recordId;

objectApiName = Contact;
nameField = LastName;
phoneField = Phone;
emailField = Email;

connectedCallback() {
    //code
}

}