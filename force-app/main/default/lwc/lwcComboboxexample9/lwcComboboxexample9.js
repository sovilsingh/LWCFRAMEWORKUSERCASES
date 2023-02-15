import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/comboBoxApexExample9.getAccounts';

export default class LwcComboboxexample9 extends LightningElement {
 @track value = '';
 @track accoptions = [];
 @track toShow = false;
 

 get options(){
      return this.accoptions;
 }

 connectedCallback() {
    getAccounts()
    .then(response=>{
        let accarr = [];
        for(var i=0;i<response.length;i++){
            accarr.push({ label:response[i].Name,value:response[i].Id});
        }
        this.accoptions = accarr;
    })
    .catch(error =>{
        console.log("error happen"+error);
    })
 }

 handleChange(event){
      this.value = event.detail.value;
      this.toShow = event.target.value;
      if(this.toShow === false){
        this.toShow = true;
      }else if(this.toShow === true){
        this.toShow = false;
      }
  }

}