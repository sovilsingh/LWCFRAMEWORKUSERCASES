import { LightningElement, track, wire, api } from 'lwc';
import getContacts from '@salesforce/apex/LwcDataTableExample8Apex.getContacts';

const columns = [
    {label : 'Name', fieldName : 'Name'},
    {label : 'Contact Id', fieldName : 'Id'},
]

export default class LwcDataTableExample8 extends LightningElement {

@track showLabel = 'Show Contacts';
@track isVisible = false;
columnsList = columns;
@track dataList = [];
@api recordId;
@api searchKey = '';


connectedCallback() {
    
    getContacts({recordId : this.recordId, searchKeys : ''})
    .then(response=>{
        this.dataList = response;
    })
    .catch(error =>{
        console.log("error happen"+error);
    })
}

//search func
handleChange(event){
    this.searchKey = event.target.value;

    //Send search key and record id to the 
    getContacts({ recordId : this.recordId , searchKeys : this.searchKey})
    .then(res => {
        this.dataList = res;
    })
    .catch(error=>{
        console.log(error);
    })
}

//show/hide
handleClick(event){
    const lable = event.target.label;
    if(lable==='Show Contacts'){
        this.showLabel = 'Hide Contacts';
        this.isVisible = true;
    }else if(lable==='Hide Contacts'){
        this.showLabel = 'Show Contacts';
        this.isVisible = false;
    }
}


}