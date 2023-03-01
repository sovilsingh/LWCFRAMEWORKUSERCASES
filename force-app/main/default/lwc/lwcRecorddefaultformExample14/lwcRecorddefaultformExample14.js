import { LightningElement, api, track } from 'lwc';
import Contact from '@salesforce/schema/Contact';
import Name_fields from '@salesforce/schema/Contact.Name';
import Phone from '@salesforce/schema/Contact.Phone';
import Email from '@salesforce/schema/Contact.Email';
export default class LwcRecorddefaultformExample14 extends LightningElement {

objectApiName = Contact;
@api recordId;
@track fields = [Name_fields,Phone, Email];

}