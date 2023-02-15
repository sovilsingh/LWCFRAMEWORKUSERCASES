import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/comboBoxApexExample9.getAccounts';
import getContactsforAccounts from '@salesforce/apex/comboBoxApexExample10.getContactsforAccounts';

const columns = [
            { label : 'Name', fieldName : 'Name'},
            { label : 'Contact Id', fieldName : 'Id'},
]

export default class LwcComboboxDatatableExample10 extends LightningElement {

@track value = '';
@track accarr = [];
columnsList = columns;
@track isShow = false;
@track dataList = [];

    connectedCallback() {
        
        getAccounts()
        .then(response => {
          let arr = [];
          for(var i=0;i<response.length;i++){
              arr.push({label:response[i].Name,value:response[i].Id});

          }
          this.accarr = arr;
        })
        .catch(error=>{
            console.log('Error happend '+error);
        })
    }

    get options(){
        return this.accarr;
    }

    handleChangeCombobox(event){
       this.value = event.detail.value;
       console.log(JSON.stringify(this.value));
       this.toShow = event.target.value;
       if(this.isShow === false){
           this.isShow = true;
        getContactsforAccounts({accountId : this.value})
        .then(response=>{
            this.dataList = response;
            console.log(JSON.stringify(response));
        })
        .catch(error=>{
            console.log('Just Error Happend in Getting Contacts');
        })
       }else if (this.isShow === true){
        this.isShow = false;
       }
        
    }

}