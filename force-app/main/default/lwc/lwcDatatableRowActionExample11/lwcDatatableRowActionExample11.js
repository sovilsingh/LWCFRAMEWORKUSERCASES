import { LightningElement, track, api} from 'lwc';
import getContactList  from '@salesforce/apex/assignAccountContactsExample11.getContactList';
import assignContactToAccount  from '@salesforce/apex/assignAccountContactsExample11.assignContactToAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

const actions = [
      {label : 'Assign', name : 'assign'},
      {label : 'View', name : 'view'},
];

const columns = [
      {label : 'Contacts', fieldName : 'Name'},
      {label : 'Ids', fieldName : 'Id'},
       {
        type: 'action',
        typeAttributes: { rowActions: actions },
       },
];
export default class LwcDatatableRowActionExample11 extends NavigationMixin(LightningElement) {

@track showContacts = 'Show Contacts';
@track isVisible = false;
@api recordId;
columnsList = columns;
@track dataList = [];
@track contactData = [];
error;


connectedCallback() {
    console.log(this.recordId);
    //get Contact List from apex 
     getContactList({ selectedId : this.recordId})
     .then(response => {
         this.dataList = response;
     })
    .catch(error=>{
    this.error = error;
    })
}

handleClick(event){
    const label = event.target.label;

    if(label === 'Show Contacts'){
       this.showContacts = 'Hide Contacts';
       this.isVisible = true;
    }else if(label === 'Hide Contacts'){
       this.showContacts = 'Show Contacts';
       this.isVisible = false;
    }
}

handleRowAction(event){
   const actionName = event.detail.action.name;
   const row = event.detail.row;
    switch (actionName) {
      case 'assign' :
      this.assignMainContact(row, this.recordId);
      break;

      case 'view' :
      this.navigateToContactRecordPage(row);
      break;

      default:
    }

  }

  assignMainContact(row, recordId){
    const selectedRow = row;
    assignContactToAccount({contactselectedId : selectedRow.Id, accountId : recordId})
    .then(response=>{
      this.contactData = response;
    })
    .catch(error=>{
      this.error = error;
    })

    this.showSuccessToast();
    window.location.reload(true);
  }

  showSuccessToast(){
     const event = new ShowToastEvent({
       label : 'Record Updated', 
       message : 'Contact assigned as Main Contact',
       variant : 'success',
       mode : 'dismissable'
     });
    this.dispatchEvent(event);
  }

  navigateToContactRecordPage(row){
    const contact = row;
    console.log(JSON.stringify(row));
    this[NavigationMixin.Navigate]({
      type : 'standard__recordPage',
      attributes : {
        recordId : contact.Id,
        objectApiName: 'Contact',
        actionName : 'view'
      },
    })
  }

}