import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/lwcwireDemoExample3.getAccounts';

const columns = [
{label: 'Name', fieldName :'Name'},
{label: 'Account Id', fieldName : 'Id'},  
];
export default class LwcwiredecoraterExample3 extends LightningElement {

@track columnsList =  columns;
@track dataList = [];

@wire(getAccounts)
 wiredAccounts({data, error}){
     if(data){
        this.dataList = data;
     }else if(error){
        console.log("error");
     }
 }
}